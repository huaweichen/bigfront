import combineRouters from 'koa-combine-routers'

import ApiRouter from './ApiRouter'
import LoginRouter from './LoginRouter'

export default combineRouters(ApiRouter, LoginRouter)