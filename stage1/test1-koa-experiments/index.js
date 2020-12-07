const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const koaJson = require('koa-json')


const app = new Koa()
const router = new Router()

// router.prefix('/api')

router.get('/', ctx => {

    ctx.body = 'Hello World!'
})

router.get('/api', ctx => {
    const {query} = ctx.request
    const requestQuery = ctx.request.query

    console.log(query)
    console.log(requestQuery)
    console.log(query.name)

    ctx.body = {
        ...query
    }
})

router.get('/async', async ctx => {
    ctx.body = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World 2 seconds later.')
        }, 2000)
    })
})

router.post('/post', async ctx => {
    let requestBody = ctx.request.body
    let {body} = ctx.request

    console.log(requestBody)
    console.log(body)

    ctx.body = {
        ...body
    }
})

// Use middlewares
app.use(koaBody())
    .use(cors())
    .use(koaJson({pretty: false, param: 'test'}))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3003)