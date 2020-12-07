const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.post('/user', ctx => {
    let {body} = ctx.request

    ctx.body = {
        code: 200,
        data: {
            ...body
        },
        msg: 'uploaded successfully.'
    }
})

/**
 * Role authentication.
 *
 * @param ctx
 * @param next
 */
const authenticator = async (ctx, next) => {
    let { role } = ctx.headers
    if (!role || role !== 'admin') {
        ctx.throw(401, 'unauthorized post');
    }
    await next()
}

/**
 * Payload validator.
 *
 * @param ctx
 * @param next
 */
const validator = (ctx, next) => {
    let { body } = ctx.request

    next()

    if (!body.name || !body.email) {
        ctx.throw(404, '`name` and/or `email` can be empty.');
    }
}

app.use(koaBody())
    .use(authenticator)
    .use(validator)
    .use(router.routes())

app.listen(3000)