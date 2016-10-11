<template>
    <div>
        <app style="float: left; margin-right: 20px" v-for="c in numbers"></app>
        <div style="clear: left"></div>
    </div>
</template>

<script>

import App from './App.vue'

    export default {
        name: 'App2',
        components: {
            App
        },
        mounted(){
            this.setNumbers(4)
        },
        data() {
            return {
                numbers: []
            }
        },
        methods: {
            setNumbers(n) {
                for (let i = 1; i <= n; i++){
                    this.numbers.push(i)
                }
            }
        }
    }
</script>