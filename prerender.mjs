import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const routes = ['/', '/privacy', '/terms']

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./.server-build/entry-server.js')

for (const url of routes) {
  const appHtml = render(url)
  const html = template.replace('<!--app-html-->', appHtml)

  const filePath =
    url === '/'
      ? toAbsolute('dist/index.html')
      : toAbsolute(`dist${url}/index.html`)

  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  fs.writeFileSync(filePath, html)
  console.log(`Pre-rendered: ${url} → ${filePath.replace(toAbsolute('.') + '/', '')}`)
}
