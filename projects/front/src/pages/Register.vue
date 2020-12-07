<template>

    <div class="layui-container fly-marginTop">
        <div class="fly-panel fly-panel-user" pad20>
            <div class="layui-tab layui-tab-brief" lay-filter="user">
                <ul class="layui-tab-title">
                    <li><router-link :to="{name: 'login'}">Login</router-link></li>
                    <li class="layui-this">Register</li>
                </ul>
                <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
                    <div class="layui-tab-item layui-show">
                        <div class="layui-form layui-form-pane">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterForm from "@/components/Forms/RegisterForm";
export default {
    name: 'Register',
    components: {
        RegisterForm
    }
}
</script>

<style scoped>

</style>