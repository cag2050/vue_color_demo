<template>
<div>
    <chrome-picker :value="colors" @input="updateValue"></chrome-picker>
</div>
</template>

<script>
import { Chrome } from 'vue-color'

let defaultProps = {
    hex: '#194d33',
    hsl: {
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 1
    },
    hsv: {
        h: 150,
        s: 0.66,
        v: 0.30,
        a: 1
    },
    rgba: {
        r: 25,
        g: 77,
        b: 51,
        a: 1
    },
    a: 1
}
export default {
    components: {
        'chrome-picker': Chrome
    },
    data () {
        return {
            colors: defaultProps
        }
    },
    methods: {
        updateValue (value) {
            console.log(value)
            this.colors = value
        }
    }
}
</script>

<style scoped>

</style>
