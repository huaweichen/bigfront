<template>
    <div id="app">
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Partials/Header'
import Footer from '@/components/Partials/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
