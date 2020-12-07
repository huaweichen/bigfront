const Koa = require('koa')
const app = new Koa()

const middleware = function async(ctx, next) {
    console.log('this is middleware')
    // next()
    console.log('this is middleware ended')
}
const middleware1 = function async(ctx, next) {
    console.log('this is middleware1')
    next()
    console.log('this is middleware1 ended')
}
const middleware2 = function async(ctx, next) {
    console.log('this is middleware2')
    next()
    console.log('this is middleware2 ended')
}

app.use(middleware).use(middleware1).use(middleware2)

app.listen(3000)