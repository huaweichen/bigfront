import axios from 'axios'

const getCaptcha = async () => {
    let result = ''

    try {
        result = await axios.get('/captcha')
        if (result.status === 200) {
            return {
                svg: result.data.data.data,
                code: result.data.data.text
            }
        }
    } catch (e) {
        console.log(e)
    }

    return result
}

const forgetPassword = async (option) => {
    let result = ''
    console.log(option)
    try {
        result = await axios.post('/forget-password', {
            ...option
        })
        if (result.status === 200) {
            return result.data.data
        }
    } catch (e) {
        console.log(e)
    }

    return result
}

export {
    getCaptcha,
    forgetPassword
}