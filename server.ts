import { createServer } from "http"
import { parse } from "url"
import next from "next"
import { startTokenRefreshLoop } from "./pages/api/authorization"

const port = Number.parseInt(process.env.PORT || "3000", 10)
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  })

  server.listen(port, '127.0.0.1', (err?: any) => {
    if (err) throw err
    console.log(`🚀 Сервер запущен на http://localhost:${port}`)
    startTokenRefreshLoop()
  })
})
