import KoaRouter from 'koa-router'
import ApiController from '../api/ApiController'

const router = new KoaRouter()

router.get('/captcha', ApiController.getCaptcha)

export default router