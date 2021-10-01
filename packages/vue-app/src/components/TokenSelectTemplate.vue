<template>
    <div
        class="w-full h-auto max-w-md bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md z-1 relative flex flex-col"
    >
        <div class="flex justify-between p-3">
            <div class="flex p-2">
                <h6>Select a token</h6>
            </div>
            <div class="flex items-start">
                <button class="py-1 px-2" @click="$emit('close')">
                    <XIcon width="24" height="24" />
                </button>
            </div>
        </div>
        <div class="flex pb-2 px-4">
            <input
                class="flex-1 border-2 border-gray-200 dark:border-gray-500"
                placeholder="Search a name or paste address"
                v-model="tokenSearchTerm"
            />
        </div>
        <div class="flex py-2 px-4">
            <p class="pr-2 text-sm">Common Bases</p>
            <tooltip
                text="These tokens are commonly paired with other tokens."
            />
        </div>
        <div class="flex flex-wrap p-3">
            <button
                v-for="token in commonTokens"
                :key="token.symbol"
                class="hoverItem bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center border-2 border-gray-200 dark:border-gray-500 m-1 py-1 px-2"
                @click="storeUserTokenSelect(token.symbol), $emit('close')"
            >
                <cryptoicon :symbol="token.symbol" size="20" />
                <h6 class="px-2">{{ token.symbol }}</h6>
            </button>
        </div>
        <div
            class="overflow-scroll flex-1 border-t-2 border-gray-200 dark:border-gray-500"
        >
            <div
                v-for="token in tokenFilter"
                :key="token.symbol"
                class="hoverItem flex p-3 items-center cursor-pointer"
                @click="storeUserTokenSelect(token.symbol), $emit('close')"
            >
                <div class="px-3">
                    <cryptoicon :symbol="token.symbol" size="24" />
                </div>
                <div class="flex-1 text-left">
                    <h6 class="text-lg">{{ token.symbol }}</h6>
                    <p class="text-xs text-gray-400">{{ token.name }}</p>
                </div>
                <div></div>
            </div>
        </div>
        <button
            class="w-full flex items-center justify-center mt-2 py-4 text-pink-600 dark:text-blue-500"
            @click="$emit('showManageTokenLists')"
        >
            <ExternalLinkIcon width="24" height="24" />
            <h6 class="ml-2">Manage Token Lists</h6>
        </button>
    </div>
</template>

<script>
// import gql from 'graphql-tag'
import { XIcon, ExternalLinkIcon } from '@vue-hero-icons/outline'
import Tooltip from './Tooltip.vue'

export default {
    methods: {
        storeUserTokenSelect(symbol) {
            this.$store.commit('setSwapToken', {
                type: this.tokenSelectType,
                symbol,
            })
        },
    },
    name: 'TokenSelectTemplate',
    props: ['tokenSelectType'],
    computed: {
        commonTokens() {
            return this.$store.state.tokens.filter((token) => token.common)
        },
        tokenFilter() {
            return this.$store.state.tokens.filter((token) =>
                token.name
                    .toLowerCase()
                    .includes(this.tokenSearchTerm.toLowerCase())
            )
        },
    },
    data() {
        return {
            tokenSearchTerm: '',
        }
    },
    components: {
        XIcon,
        ExternalLinkIcon,
        Tooltip,
    },
    // TODO: get real time token list from subgraph
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
}
</script>

<style scoped>
button {
    @apply rounded-2xl;
}
input {
    @apply bg-transparent text-xl p-3 rounded-2xl;
}
.hoverItem:hover {
    @apply bg-gray-100;
}
.dark .hoverItem:hover {
    @apply bg-gray-800;
}
</style>
