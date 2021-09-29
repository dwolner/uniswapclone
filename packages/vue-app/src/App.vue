<template>
    <div id="app" class="dark:bg-black">
        <div id="background-overlay" />
        <Nav />
        <Swap />
    </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import Swap from "./components/Swap.vue"

export default {
    name: "EthereumApp",
    components: {
        Nav,
        Swap
    },
}
</script>

<style>
#app {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#background-overlay {
    background: url('./assets/gradient_background.svg');
    background-size: cover;
    opacity: .4;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
}
</style>
