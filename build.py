"""Build portable HTML and a staging ZIP using only the Python standard library."""
from pathlib import Path
import base64,json,mimetypes,re,zipfile
ROOT=Path(__file__).resolve().parent
SRC=ROOT/'src'
DIST=ROOT/'dist'
def build():
    html=(SRC/'index.html').read_text()
    links=json.loads((SRC/'links.json').read_text())
    def asset(match):
        name=match.group(1)
        file=SRC/'assets'/name
        if file.parent != SRC/'assets': raise ValueError('Invalid asset path')
        mime=mimetypes.guess_type(name)[0]
        return 'data:'+mime+';base64,'+base64.b64encode(file.read_bytes()).decode()
    html=re.sub(r'\{\{asset:([^}]+)\}\}',asset,html)
    html=re.sub(r'\{\{url:([^}]+)\}\}',lambda m:links[m.group(1)],html)
    html=html.replace('{{styles}}','<style>\n'+(SRC/'styles.css').read_text()+'</style>')
    html=html.replace('{{script}}','<script>\n'+(SRC/'navigation.js').read_text()+'</script>')
    if '{{' in html: raise ValueError('Unresolved template token')
    DIST.mkdir(exist_ok=True)
    (DIST/'index.html').write_text(html)
    for name in ['.nojekyll','robots.txt']:(DIST/name).write_bytes((SRC/name).read_bytes())
    (DIST/'README.md').write_text('Open index.html. All images, styles and scripts are embedded. External resource, Careers and intake links require internet access. Edit src/ and run python3 build.py to rebuild; do not edit generated files.\n')
    with zipfile.ZipFile(ROOT/'pbg-github-pages-staging.zip','w',zipfile.ZIP_DEFLATED) as archive:
        for file in sorted(DIST.iterdir()):archive.write(file,file.name)
    print('Built dist/index.html and pbg-github-pages-staging.zip')
if __name__=='__main__':build()
