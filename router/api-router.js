const Router = require('router')
const router = Router();
const controller = require('../controller/api-controller')

router.get('/' , controller.homeRouter)
router.get('/test' ,  controller.TestRouter)
router.post('/register', controller.registerRouter)



 module.exports = router