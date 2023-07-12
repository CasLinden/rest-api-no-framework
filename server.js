const http = require("http");
const { getProducts, getProduct, createProduct, updateProduct, removeProduct } = require("./controllers/productController.js")


const server = http.createServer((req, res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
        getProducts(req, res)
    } 
    else if (req.url.match(/\/api\/products\/([0-9a-fA-F\-]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    }
    else if(req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res)
    } 
    else if (req.url.match(/\/api\/products\/([0-9a-fA-F\-]+)/) && req.method === 'PUT'){
        console.log('else if matched')
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    }
    else if(req.url.match(/\/api\/products\/([0-9a-fA-F\-]+)/) && req.method === 'DELETE'){
        const id = req.url.split('/')[3]
        removeProduct(req, res, id)
        res.end(JSON.stringify({message: `product with${id}: deleted`}))
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
})

const PORT = process.env.port || 5001

server.listen(PORT, () => console.log(`server running on port ${PORT}`))