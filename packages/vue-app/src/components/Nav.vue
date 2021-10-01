<template>
    <nav
        class="w-full flex justify-between items-center px-3 py-4 relative z-10"
    >
        <div class="flex xl:flex-1 items-center">
            <router-link to="/" class="transition-transform transform hover:-rotate-12 w-max px-2 cursor-pointer">
                <img
                    v-if="!this.$store.state.darkMode"
                    src="../assets/uni_logo_black.svg"
                />
                <img v-else src="../assets/uni_logo_white.svg" />
            </router-link>
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
                v-if="!this.$store.state.wallet.address"
                class="bg-pink-100 text-pink-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 mx-1 rounded-xl"
                @click="$store.commit('setShowWalletConnectionModal', true)"
            >
                <h6>Connect to a wallet</h6>
            </button>
            <button
                v-else
                class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center px-3 py-1 mx-1 rounded-xl"
            >
                <h6 class="pl-2">
                    {{ $store.state.wallet.balance }} ETH
                </h6>
                <h6 class="px-2">
                    {{ $store.state.wallet.address.substring(0, 6) }}...{{
                        $store.state.wallet.address.substring(
                            $store.state.wallet.address.length - 4,
                            $store.state.wallet.address.length
                        )
                    }}
                </h6>
                <div
                    style="overflow: hidden; width: 16px; height: 16px; background-color: rgb(36, 96, 225); border-radius: 8px;"
                >
                    <svg width="16px" height="16px">
                        <rect
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                            fill="#F74501"
                            transform="translate(0.7861742157168673 -0.3238474544961139) rotate(412.9 8 8)"
                        ></rect>
                        <rect
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                            fill="#F1A402"
                            transform="translate(-5.224638615770483 2.205513125268286) rotate(189.6 8 8)"
                        ></rect>
                        <rect
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                            fill="#F3C700"
                            transform="translate(-13.574405275541888 5.189193012034317) rotate(205.6 8 8)"
                        ></rect>
                    </svg>
                </div>
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
