class DefaultController {
    constructor() {
    }

    async index(ctx) {
        ctx.body = {
            msg: 'hello world'
        }
    }
}

export default new DefaultController()