<template>
    <div class="layui-container fly-marginTop">
        <div class="fly-panel fly-panel-user" pad20>
            <div class="layui-tab layui-tab-brief" lay-filter="user">
                <ul class="layui-tab-title">
                    <li class="layui-this">Login</li>
                    <li>
                        <router-link :to="{name: 'register'}">Register</router-link>
                    </li>
                </ul>
                <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
                    <div class="layui-tab-item layui-show">
                        <div class="layui-form layui-form-pane">
                            <LoginForm></LoginForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/Forms/LoginForm'

export default {
    name: "Login",
    components: {
        LoginForm
    }
}
</script>

<style lang="scss" scoped>

</style>