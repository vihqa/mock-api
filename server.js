const jsonServer = require('json-server');

const { data } = require('./database')
const server = jsonServer.create()
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults()

server.use(jsonServer.bodyParser);

/* Mock dos cenários de descontos */
server.post('/discounts', (req, res) => {
    const skus = req.body.skus
    const ids = skus.map(sku => sku.id)

    const skusFiltered = data.skus.filter(sku => ids.includes(sku.id)).map(sku => sku);

    const response = {
        skus: skusFiltered,
    };

    res.json(response);
});

server.get('/discounts', (req, res) => {
    res.json(data.skus);
})

const port = 8080

server.use(middleware)
server.use(router)

server.listen(port, () => {
    console.log(`JSON server is running in port: ${port}`)
})

