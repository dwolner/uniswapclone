<template>
    <div class="flex justify-center py-12 px-3">
        <div class="w-full max-w-4xl text-gray-700 dark:text-white">
            <div class="flex justify-between">
                <div class="p-2 pb-3">
                    <h6 class="text-xl">Pools Overview</h6>
                </div>
                <div class="flex items-start relative">
                    <button
                        class="flex items-center bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-xl px-3 py-1 mx-1"
                        @click="showPoolMore = !showPoolMore"
                    >
                        <h6 class="pr-1">More</h6>
                        <ChevronDownIcon width="18" height="18" />
                    </button>
                    <button
                        class="flex items-center bg-pink-100 text-pink-700 dark:bg-blue-900 dark:text-blue-200 rounded-xl px-3 py-1 mx-1"
                    >
                        <PlusIcon width="18" height="18" />
                        <h6 class="pl-1">New Position</h6>
                    </button>
                    <pool-more :showPoolMore="showPoolMore" />
                </div>
            </div>
            <div class="flex justify-between items-stretch">
                <div
                    class="w-2/3 p-6 mr-2 text-left bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md cursor-pointer"
                    @click="
                        openLink(
                            'https://help.uniswap.org/en/articles/5391541-providing-liquidity-on-uniswap-v3'
                        )
                    "
                >
                    <div class="flex">
                        <h6 class="text-xl font-bold pb-3 pr-2">
                            Learn about providing liquidity
                        </h6>
                        <ExternalLinkIcon width="18" height="18" />
                    </div>
                    <p>
                        Check out our v3 LP walkthrough and migration guides.
                    </p>
                </div>
                <div
                    class="w-1/3 p-6 text-left bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md cursor-pointer"
                    @click="openLink('https://info.uniswap.org/#/pools')"
                >
                    <div class="flex">
                        <h6 class="text-xl font-bold pb-3 pr-2">
                            Top pools
                        </h6>
                        <ExternalLinkIcon width="18" height="18" />
                    </div>
                    <p>Explore popular pools on Uniswap Analytics.</p>
                </div>
            </div>
            <div class="w-full py-4">
                <div
                    class="p-8 bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md"
                >
                    <div class="flex justify-center p-4">
                        <InboxIcon width="36" height="36" />
                    </div>
                    <p class="p-4">Your V3 liquidity positions will appear here.</p>
                    <button
                        v-if="!$store.state.wallet.address"
                        class="my-4 py-1 px-4 bg-pink-100 text-pink-700 dark:bg-blue-900 dark:text-blue-200 rounded-2xl"
                        @click="
                            $store.commit('setShowWalletConnectionModal', true)
                        "
                    >
                        <h6 class="py-1">Connect Wallet</h6>
                    </button>
                </div>
            </div>
            <div class="flex">
                <button
                    class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center px-2 py-1 rounded-2xl border-2 border-gray-200 dark:border-gray-800"
                >
                    <CollectionIcon width="18" height="18" />
                    <p class="px-2">View V2 Liquidity</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    ChevronDownIcon,
    PlusIcon,
    CollectionIcon,
    InboxIcon,
    ExternalLinkIcon,
} from '@vue-hero-icons/outline'
import PoolMore from './PoolMore.vue'
export default {
    methods: {
        storeUserTokenSelect(symbol) {
            this.$store.commit('setSwapToken', {
                type: this.tokenSelectType,
                symbol,
            })
        },
        storeUserSelectedList(name) {
            this.$store.commit('updateSelectedLists', name)
        },
        openLink(url) {
            window.open(url)
        },
    },
    name: 'Pool',
    props: {
        msg: String,
    },
    data() {
        return {
            showPoolMore: false,
        }
    },
    computed: {},
    components: {
        PoolMore,
        ChevronDownIcon,
        PlusIcon,
        InboxIcon,
        CollectionIcon,
        ExternalLinkIcon,
    },
    async mounted() {},
}
</script>

<style scoped>
input {
    background: none;
    text-align: right;
}
p {
    @apply text-sm;
}
</style>
