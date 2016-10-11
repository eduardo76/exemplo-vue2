<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 100px">
    <h3>{{ msg }} ({{counter}})</h3>
    <button @click="changeMsg">Teste</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello Vue!',
      counter: 1,
    }
  },
  mounted() {
    this.startCount()
  },
  methods: {
    changeMsg() {
      this.msg = (this.msg == 'blah') ? 'Hello Vue!' : 'blah';
      if (this.counter == 1) this.startCount();
    },
    startCount(){
      setInterval(() => this.counter++, 1000);
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
