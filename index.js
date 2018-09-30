'use strict'

const http = require('http')

const app = http.createServer((req, res) => {
  console.log('')
  console.log(req['url'])
  console.log(req['headers']['user-agent'])
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('hello world')
})

app.listen(8000)

console.log('server is running on "http://localhost:8000/"')
