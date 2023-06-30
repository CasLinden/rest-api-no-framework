import http from "http";

const server = http.createServer((req, res) => {})

const PORT = process.env.port || 5001

server.listen(PORT)