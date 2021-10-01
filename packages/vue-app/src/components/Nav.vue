<template>
    <nav
        class="w-full flex justify-between items-center px-3 py-4 relative z-10"
    >
        <div class="flex xl:flex-1 items-center">
            <div class="hover:rotate-60 w-max px-2">
                <img
                    v-if="!this.$store.state.darkMode"
                    src="../assets/uni_logo_black.svg"
                />
                <img v-else src="../assets/uni_logo_white.svg" />
            </div>
            <div class="hidden lg:flex xl:hidden pl-3">
                <Tabs />
            </div>
        </div>
        <div class="hidden xl:flex flex-1 justify-center">
            <Tabs />
        </div>
        <div class="flex xl:flex-1 justify-end relative">
            <button
                class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center px-3 py-1 mx-1 rounded-xl"
            >
                <cryptoicon symbol="eth" size="20" />
                <h6 class="hidden sm:flex pl-2">Ethereum</h6>
            </button>
            <button
                class="bg-pink-100 text-pink-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 mx-1 rounded-xl"
                @click="$store.commit('setShowWalletConnectionModal', true)"
            >
                <h6>Connect to a wallet</h6>
            </button>
            <button
                class="bg-white dark:bg-gray-900 dark:text-white px-3 py-1 mx-1 rounded-xl"
                @click="showNavSettings = !showNavSettings"
            >
                <DotsHorizontalIcon width="24" height="24" />
            </button>

            <nav-settings-modal :showNavSettings="showNavSettings" />

            <div
                class="grid lg:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2"
            >
                <Tabs />
            </div>
        </div>
    </nav>
</template>

<script>
import NavSettingsModal from './NavSettingsModal.vue'
import Tabs from './Tabs.vue'
import { DotsHorizontalIcon } from '@vue-hero-icons/outline'

export default {
    methods: {},
    name: 'Nav',
    data() {
        return {
            showNavSettings: false,
        }
    },
    components: {
        Tabs,
        NavSettingsModal,
        DotsHorizontalIcon,
    },
    async mounted() {},
}
</script>

<style scoped></style>
