<template>
    <div>
        <div class="left" v-for="c in numbers">
            <h2>Counter: {{counter}}</h2>
        </div>
    </div>
</template>

<style>
    .left {
        float: left; 
        margin-right: 20px
    }
</style>

<script>
    export default {
        data() {
            return {
                counter: 1,
                numbers: []
            }
        },
        mounted() {
            this.setNumbers(500)
            this.startCount()
        },
        methods: {
            startCount(){
                setInterval(() => this.counter++, 1);
            },
            setNumbers(n) {
                for (let i = 1; i <= n; i++){
                    this.numbers.push(i)
                }
            }
        }
    }
</script>