<template>
    <div class="layui-form-mid layui-word-aux svg-captcha" v-html="svgCaptchaTag" @click="refreshCaptcha"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getCaptcha } from '@/api/login'

export default {
    name: "SvgCaptcha",
    setup() {
        let svgCaptchaCode = ref('')
        let svgCaptchaTag = ref('')

        function getNewCaptchaFromServer() {
            getCaptcha().then((response) => {
                svgCaptchaCode.value = response.code
                svgCaptchaTag.value = response.svg
            })
        }

        function refreshCaptcha() {
            getNewCaptchaFromServer()
        }

        onMounted(() => {
            getNewCaptchaFromServer()
        })

        return {
            refreshCaptcha,
            svgCaptchaTag
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-captcha {
    position: relative;
    top: -10px;
}
</style>