<template>
    <VeeForm class="layui-form layui-form-pane" :validation-schema="validateSchema">
        <TextInput
            input-label="Username"
            input-name="username"
            input-placeholder="Please enter username"
        />
        <TextInput
            input-label="Password"
            input-name="password"
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
        <button type="button" class="layui-btn">Login</button>
        <span style="padding-left:20px;">
            <router-link :to="{name: 'forgetPassword'}">Forget Password</router-link>
        </span>
        <SocialLogin/>
    </VeeForm>
</template>

<script>
import {Form as VeeForm} from 'vee-validate';
import * as Yup from "yup";
import TextInput from "@/components/Inputs/TextInput";
import SvgCaptcha from "@/components/Inputs/SvgCaptcha";
import SocialLogin from "@/components/Inputs/SocialLogin";

export default {
    name: "LoginForm",
    components: {
        SvgCaptcha,
        TextInput,
        VeeForm,
        SocialLogin
    },
    setup() {
        const validateSchema = Yup.object().shape({
            username: Yup.string()
                .email()
                .required()
                .label('Username'),
            password: Yup.string()
                .min(8)
                .max(256)
                .required()
                .label('Password'),
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

<style lang="scss" scoped>
.front-link {
    margin-left: 10px;

    &:hover {
        color: #009688;
    }
}
</style>