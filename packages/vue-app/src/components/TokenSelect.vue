<template>
    <div class="flex justify-center py-20 absolute w-full h-screen top-0 z-10">
        <div
            class="bg-black bg-opacity-30 absolute w-full h-screen top-0"
            @click="$emit('close')"
        />
        <div
            v-if="!showManageTokenLists"
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
                <QuestionMarkCircleIcon width="20" height="20" />
            </div>
            <div class="flex flex-wrap p-3">
                <button
                    v-for="token in commonTokens"
                    :key="token.symbol"
                    class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center border-2 border-gray-200 dark:border-gray-500 m-1 py-1 px-2"
                    @click="
                        $emit('userSelectedToken', token.symbol), $emit('close')
                    "
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
                    class="flex p-3 items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-grey-800"
                    @click="
                        $emit('userSelectedToken', token.symbol), $emit('close')
                    "
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
                @click="showManageTokenLists = true"
            >
                <ExternalLinkIcon width="24" height="24" />
                <h6 class="ml-2">Manage Token Lists</h6>
            </button>
        </div>

        <div
            v-if="showManageTokenLists"
            class="w-full h-auto max-w-md bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md z-1 relative flex flex-col"
        >
            <div class="flex justify-between p-3">
                <div class="flex">
                    <button
                        class="py-1 px-2"
                        @click="showManageTokenLists = false"
                    >
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
                        <span :class="`flex-1 py-3 px-3 mx-1 rounded-xl ${true ? 'bg-white dark:bg-gray-800' : ''}`">Lists</span>
                        <span :class="`flex-1 py-3 px-3 mx-1 rounded-xl ${false ? 'bg-white dark:bg-gray-800' : ''}`">Tokens</span>
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
                    :class="`flex p-3 items-center cursor-pointer ${ selectedLists.includes(list.name) ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800' } text-gray-800 dark:text-gray-100 rounded-xl mx-6 my-4`"
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
                            :class="`flex ${ selectedLists.includes(list.name) ? 'flex-row-reverse' : '' } items-center bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl p-2`"
                            @click="$emit('userSelectedList', list.name)"
                        >
                            <div class="mx-2 text-sm font-bold">
                               {{selectedLists.includes(list.name) ? 'ON' : 'OFF'}}
                            </div>
                            <span
                                :class="`rounded-full h-6 w-6 ${ selectedLists.includes(list.name) ? 'bg-gray-500' : 'bg-gray-300 dark:bg-gray-800' }`"
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import gql from 'graphql-tag'
import { mapState } from 'vuex'
import {
    XIcon,
    ArrowLeftIcon,
    ExternalLinkIcon,
    QuestionMarkCircleIcon,
} from '@vue-hero-icons/outline'

export default {
    methods: {},
    name: 'TokenSelect',
    computed: {
        ...mapState(['tokens', 'tokenLists', 'selectedLists']),
        commonTokens() {
            return this.tokens.filter((token) => token.common)
        },
        tokenFilter() {
            return this.tokens.filter((token) =>
                token.name
                    .toLowerCase()
                    .includes(this.tokenSearchTerm.toLowerCase())
            )
        },
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
            showManageTokenLists: false,
            tokenSearchTerm: "",
            tokenListSearchTerm: "",
        }
    },
    components: {
        ArrowLeftIcon,
        QuestionMarkCircleIcon,
        XIcon,
        ExternalLinkIcon,
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
.active {
    @apply bg-gray-200 rounded-xl;
}
</style>
