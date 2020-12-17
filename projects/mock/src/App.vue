<template>
  <div id="app">
    <Mock />
  </div>
</template>

<script>
import Mock from './components/Mock.vue'

export default {
  name: 'App',
  components: {
    Mock
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
