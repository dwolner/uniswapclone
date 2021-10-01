<template>
    <div class="flex justify-center py-20 absolute w-full h-screen top-0 z-10">
        <div
            class="bg-black bg-opacity-30 absolute w-full h-screen top-0"
            @click="$emit('close')"
        />

        <div
            class="w-full max-w-md bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md z-1 relative flex flex-col"
        >
            <div class="flex justify-between p-2">
                <div class="flex p-2">
                    <h6 class="text-lg">Connect to a wallet</h6>
                </div>
                <div class="flex">
                    <button class="py-1 px-2" @click="$emit('close')">
                        <XIcon width="24" height="24" />
                    </button>
                </div>
            </div>

            <div class="flex-1 px-4">
                <div
                    class="flex p-4 items-center cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-xl my-2 border-2 border-gray-200 dark:border-gray-700"
                >
                    <p class="text-sm text-left">
                        By connecting a wallet, you agree to Uniswap Labs’
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://uniswap.org/terms-of-service/"
                            class="sc-1cchcrx-5 mEGWI"
                            >Terms of Service</a
                        >
                        and acknowledge that you have read and understand the
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://uniswap.org/disclaimer/"
                            class="sc-1cchcrx-5 mEGWI"
                            >Uniswap protocol disclaimer</a
                        >.
                    </p>
                </div>
                <div
                    v-for="wallet in wallets"
                    :key="wallet.name"
                    class="flex p-4 items-center cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-xl my-2 border-2 border-gray-200 dark:border-gray-700"
                    @click="connectWallet()"
                >
                    <div class="flex-1 text-left">
                        <h6 class="text-lg">{{ wallet.name }}</h6>
                    </div>
                    <div class="px-3">
                        <img :src="wallet.logoURI" class="w-10" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import gql from 'graphql-tag'
import { mapState } from "vuex"
import { XIcon } from "@vue-hero-icons/outline"

export default {
    methods: {
        connectWallet() {
            let walletAddress = '0xE838nf893d8hdn93nd9xn39m'
            this.$store.commit('setWalletAddress', walletAddress)
            this.$emit('close')
        }
    },
    name: "WalletConnectionModal",
    props: {
        msg: String,
    },
    computed: {
        ...mapState(["wallets"]),
    },
    data() {
        return {
            showManageTokenLists: true,
            tokenSearchTerm: "",
            tokenListSearchTerm: "",
        }
    },
    components: {
        XIcon,
    },
    // apollo: {
    //     tokens: gql`
    //         query {
    //             tokens {
    //                 symbol
    //                 name
    //                 decimals
    //             }
    //         }
    //     `,
    // },
    async mounted() {},
}
</script>

<style scoped>
button {
    @apply rounded-2xl;
}
input {
    background: none;
    font-size: 1.25rem;
    @apply p-3 rounded-2xl;
}
a {
    color: rgb(33, 114, 229);
}
</style>
