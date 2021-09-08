<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Datepicker date="2028-02-01"/>
  </div>
</template>

<script>
import Datepicker from './components/Datepicker.vue'

export default {
  name: 'App',
  components: {
    Datepicker
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
