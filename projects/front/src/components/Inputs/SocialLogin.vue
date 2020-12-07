<template>
    <div class="layui-form-item fly-form-app">
        <span>Social Network Login</span>
        <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
        <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
    </div>
</template>

<script>
export default {
    name: 'SocialLogin'
}
</script>

<style scoped>

</style>