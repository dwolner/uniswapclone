<template>
    <div
        class="w-full h-auto max-w-md bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md z-1 relative flex flex-col"
    >
        <div class="flex justify-between p-3">
            <div class="flex">
                <button class="py-1 px-2" @click="$emit('hideManageTokenLists')">
                    <ArrowLeftIcon width="24" height="24" />
                </button>
            </div>
            <div class="flex p-2">
                <h6 class="text-lg">Manage</h6>
            </div>
            <div class="flex">
                <button class="py-1 px-2" @click="$emit('close')">
                    <XIcon width="24" height="24" />
                </button>
            </div>
        </div>
        <div
            class="p-6 border-t-2 border-b-2 border-gray-200 dark:border-gray-500"
        >
            <div class="py-2">
                <button
                    class="w-full flex rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white font-bold py-1 px-1"
                >
                    <span
                        :class="
                            `flex-1 py-3 px-3 mx-1 rounded-xl ${
                                true ? 'bg-white dark:bg-gray-900' : ''
                            }`
                        "
                        >Lists</span
                    >
                    <span
                        :class="
                            `flex-1 py-3 px-3 mx-1 rounded-xl ${
                                false ? 'bg-white dark:bg-gray-900' : ''
                            }`
                        "
                        >Tokens</span
                    >
                </button>
            </div>
            <input
                class="w-full mt-3 border-2 border-gray-200 dark:border-gray-500"
                placeholder="https:// or ipfs:// or ENS name"
                v-model="tokenListSearchTerm"
            />
        </div>
        <div
            class="overflow-scroll flex-1 border-t-2 border-gray-200 dark:border-gray-500"
        >
            <div
                v-for="list in tokenListsFilter"
                :key="list.symbol"
                :class="
                    `flex p-3 items-center ${
                        selectedLists.includes(list.name)
                            ? 'bg-gray-300 dark:bg-gray-600'
                            : 'bg-gray-100 dark:bg-gray-800'
                    } text-gray-800 dark:text-gray-100 rounded-xl mx-6 my-4`
                "
            >
                <div class="px-3">
                    <img :src="list.logoURI" class="w-10" />
                </div>
                <div class="flex-1 text-left">
                    <h6 class="text-lg">{{ list.name }}</h6>
                    <p class="text-xs text-gray-800 dark:text-gray-300">
                        {{ list.tokens.length }} tokens
                    </p>
                </div>
                <div>
                    <div
                        :class="
                            `flex ${
                                selectedLists.includes(list.name)
                                    ? 'flex-row-reverse'
                                    : ''
                            } items-center bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl p-2 cursor-pointer`
                        "
                        @click="storeUserSelectedList(list.name)"
                    >
                        <div class="mx-2 text-sm font-bold">
                            {{
                                selectedLists.includes(list.name) ? 'ON' : 'OFF'
                            }}
                        </div>
                        <span
                            :class="
                                `rounded-full h-6 w-6 ${
                                    selectedLists.includes(list.name)
                                        ? 'bg-gray-500'
                                        : 'bg-gray-300 dark:bg-gray-800'
                                }`
                            "
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import gql from 'graphql-tag'
import { mapState } from 'vuex'
import { XIcon, ArrowLeftIcon } from '@vue-hero-icons/outline'

export default {
    methods: {
        storeUserSelectedList(name) {
            this.$store.commit('updateSelectedLists', name)
        },
    },
    name: 'ManageTokenListsTemplate',
    computed: {
        ...mapState(['tokenLists', 'selectedLists']),
        tokenListsFilter() {
            return this.tokenLists.filter((token) =>
                token.name
                    .toLowerCase()
                    .includes(this.tokenListSearchTerm.toLowerCase())
            )
        },
    },
    data() {
        return {
            tokenListSearchTerm: '',
        }
    },
    components: {
        ArrowLeftIcon,
        XIcon,
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
</style>
