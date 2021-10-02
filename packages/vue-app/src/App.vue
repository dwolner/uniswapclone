<template>
    <div id="app" class="bg-white dark:bg-black">
        <div id="background-overlay" />
        <div class="z-0 relative">
            <Nav />
            <router-view></router-view>
            <transition name="fade">
                <wallet-connection-modal
                    v-if="showWalletConnectionModal"
                    @close="
                        $store.commit('setShowWalletConnectionModal', false)
                    "
                />
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from './components/Nav.vue'
import WalletConnectionModal from './components/WalletConnectionModal.vue'

export default {
    name: 'App',
    components: {
        Nav,
        WalletConnectionModal,
    },
    computed: {
        ...mapState(['showWalletConnectionModal']),
    },
    created() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.$store.dispatch('toggleDarkMode')
        }
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
    height: 100vh;
}
#background-overlay {
    background: url('./assets/gradient_background.svg');
    background-size: cover;
    opacity: 0.3;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 0;
}
</style>
