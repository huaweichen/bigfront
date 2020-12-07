import KoaRouter from 'koa-router'
import DefaultController from '../api/DefaultController'

const router = new KoaRouter()

router.get('test', DefaultController.index)

export default router