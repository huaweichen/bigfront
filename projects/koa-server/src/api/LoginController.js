import sendEmail from '../config/MailConfig'
import moment from 'moment'

class LoginController {
    constructor(props) {}

    async forgetPassword(ctx) {
        const { body } = ctx.request

        const user = 'Test User' // @todo validate username exist
        const verifyCode = '1234' // @todo use redis to handle this.

        try {
            const sendInfo = {
                code: verifyCode,
                email: body.username,
                expiry: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                user: user
            }

            let result = await sendEmail(sendInfo)

            ctx.body = {
                code: 200,
                data: result,
                msg: 'Email sent.'
            }
        } catch (e) {
            console.log(e) // @todo centralise to handle it.
        }
    }

}

export default new LoginController()