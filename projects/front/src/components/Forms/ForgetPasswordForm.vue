<template>
    <VeeForm class="layui-form layui-form-pane" :validation-schema="validateSchema">
        <TextInput
            input-label="Username"
            input-name="username"
            input-placeholder="Please enter username"
        />
        <TextInput
            input-label="Captcha"
            input-name="captcha"
            input-placeholder="Please enter captcha"
        >
            <SvgCaptcha/>
        </TextInput>
        <button type="button" class="layui-btn">Submit</button>
        <span style="padding-left:20px;">
            <router-link :to="{name: 'register'}">Register</router-link>
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
    name: 'ForgetPasswordForm',
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