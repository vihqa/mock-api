const jsonServer = require('json-server');

const server = jsonServer.create()
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults()

// middleware para adicionar dado no header
server.use((req, res, next) => {
    // verifica se o header "X-Custom-Header" existe na requisição
    if (req.headers['x-seller-id']) {
        // adiciona o valor do header no objeto "locals" para ser utilizado posteriormente
        res.locals.customHeader = req.headers['x-seller-id'];
    }
    next();
});

const port = 8080

server.use(middleware)
server.use(router)

server.listen(port, () => {
    console.log(`JSON server is running in port: ${port}`)
})

