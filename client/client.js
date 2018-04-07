import Vue from 'vue'
import socketIOClient from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App'

Vue.config.productionTip = false

Vue.use(VueSocketIO, socketIOClient(process.env.SOCKET_CLIENT, {'transports': ['websocket', 'polling']}))

new Vue({
  el: '#app',
  render: h => h(App)
})
