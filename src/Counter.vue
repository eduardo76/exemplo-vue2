<template>
    <span>Counter: {{counter}}</span>
</template>

<script>
    export default {
        data() {
            return {
                counter: 1,
            }
        },
        mounted() {
            this.startCount()
        },
        methods: {
            startCount(){
                setInterval(() => this.counter++, 1);
            }
        }
    }
</script>