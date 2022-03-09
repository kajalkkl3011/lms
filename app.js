const http = require('http')
const Router = require('router');
const indexRoute = require('./router/api-router')
const finalhandler = require('finalhandler')
const bodyParser = require('body-parser');


const router = Router();
router.use(bodyParser.json())
router.use('/api',indexRoute)
const server = http.createServer((req, res) => {
 router(req, res, finalhandler(req, res));
})
server.listen(9000,()=> console.log('> Server is  running on port : 9000'))
