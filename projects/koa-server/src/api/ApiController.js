import SvgCaptcha from 'svg-captcha'

class ApiController {
    async getCaptcha(ctx) {
        const newCap = SvgCaptcha.create({
            size: 4,
            noise: Math.floor(Math.random()*3),
            color: true,
            ignoreChars: 'oil01',
            width: 100,
            height: 38
        })
        ctx.body = {
            data: newCap
        }
    }
}

export default new ApiController()