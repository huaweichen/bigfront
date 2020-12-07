import combineRoutes from 'koa-combine-routers'
import demoRouter from './DemoRouter'

export default combineRoutes(demoRouter)