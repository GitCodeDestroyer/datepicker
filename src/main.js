import Vue from 'vue'
import App from './App.vue'
import './assets/css/app.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


function checkYear(year) {
  if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
    return true
  }
  else {
    return false
  }
}

console.log(checkYear(2011))