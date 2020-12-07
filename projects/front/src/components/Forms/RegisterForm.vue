<template>
    <VeeForm class="layui-form layui-form-pane" :validation-schema="validateSchema">
        <TextInput
            input-label="Username"
            input-name="username"
            input-placeholder="Please enter username"
        />
        <TextInput
            input-label="Nickname"
            input-name="nickname"
            input-placeholder="Please enter nickname"
        />
        <TextInput
            input-label="Password"
            input-name="password"
            input-type="password"
            input-placeholder="Please enter password"
        />
        <TextInput
            input-label="Confirm"
            input-name="confirm-password"
            input-type="password"
            input-placeholder="Please enter password"
        />
        <TextInput
            input-label="Captcha"
            input-name="captcha"
            input-placeholder="Please enter captcha"
        >
        <SvgCaptcha/>
        </TextInput>
        <button type="button" class="layui-btn">Register</button>
        <span style="padding-left:20px;">
            <router-link :to="{name: 'forgetPassword'}">Forget Password</router-link>
        </span>
        <SocialLogin/>
    </VeeForm>
</template>

<script>
import {Form as VeeForm} from 'vee-validate'
import * as Yup from 'yup'

import TextInput from "@/components/Inputs/TextInput"
import SvgCaptcha from "@/components/Inputs/SvgCaptcha"
import SocialLogin from "@/components/Inputs/SocialLogin"

export default {
    name: 'RegisterForm',
    components: {
        VeeForm,
        TextInput,
        SvgCaptcha,
        SocialLogin
    },
    setup() {
        const validateSchema = Yup.object().shape({
            username: Yup.string()
                .email()
                .required()
                .label('Username'),
            nickname: Yup.string()
                .required()
                .label('Nickname'),
            password: Yup.string()
                .min(8)
                .max(256)
                .required()
                .label('Password'),
            'confirm-password': Yup.string()
                .min(8)
                .max(256)
                .required()
                .oneOf([Yup.ref('password')], 'Confirm password should match with Password')
                .label('Confirm password'),
            captcha: Yup.string()
                .length(4)
                .required()
                .label('Captcha')
        })

        return {
            validateSchema
        }
    }
}
</script>

<style scoped>

</style>