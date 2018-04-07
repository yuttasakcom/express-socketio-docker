import Vue from 'vue'
import socketIOClient from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App'

Vue.config.productionTip = false

Vue.use(VueSocketIO, socketIOClient('http://localhost:3000'))

new Vue({
  el: '#app',
  render: h => h(App)
})
