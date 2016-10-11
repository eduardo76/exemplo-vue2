<template>
    <div>
        <counter style="margin-right: 20px" v-for="c in numbers"></counter>
    </div>
</template>

<script>

import Counter from './Counter.vue'

    export default {
        name: 'App2',
        components: {
            Counter
        },
        mounted(){
            this.setNumbers(100)
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