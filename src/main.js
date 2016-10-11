import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import Counter from './Counter.vue'

// Vue.component('app', require('./App.vue'));

new Vue({
  // el: '#app',
  // components: {
  //   App,
  // },
  render: h => h(App)
}).$mount('#app')


new Vue({
  el: '#app2',
  // components: {
  //   App,
  // },
  render: h => h(App2)
})

// new Vue({
//   render(h) {
//     return h(Counter);
//   }
// }).$mount('#counter')