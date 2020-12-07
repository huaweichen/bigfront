import Koa from 'koa'
import path from 'path'
import koaHelmet from "koa-helmet"
import koaStatic from "koa-static"
import koaBody from "koa-body"
import koaJson from "koa-json"
import cors from "@koa/cors"
import koaCompose from "koa-compose"
import router from "./routes/routes"
import koaCompress from "koa-compress"

const app = new Koa()
const isDevMode = process.env.NODE_ENV !== 'production'

const middleware = koaCompose([
    koaBody(),
    koaStatic(path.join(__dirname, '../public')),
    cors(),
    koaJson({
        pretty: false,
        param: 'pretty'
    }),
    koaHelmet()
])

if (!isDevMode) {
    app.use(koaCompress())
}

app.use(middleware)
    .use(router())
    .listen(3000)