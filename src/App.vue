<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 100px">
    <h3>{{ msg }} (<counter></counter>)</h3>
    <button @click="changeMsg">Teste</button>
    <br><br><br><br>
  </div>
</template>

<script>

import Counter from './Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    changeMsg() {
      this.msg = (this.msg == 'blah') ? 'Hello Vue!' : 'blah';
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
