<template>
    <div class="flex justify-center py-12">
        <div
            class="w-full max-w-md p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-white font-bold rounded-2xl shadow-md"
        >
            <div class="grid grid-cols-2 relative">
                <div class="flex justify-left p-2 pb-3">
                    <h6>Swap</h6>
                </div>
                <div class="flex justify-end items-start">
                    <button
                        @click="
                            showTransactionSettings = !showTransactionSettings
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                </div>
                <transaction-settings-modal
                    :showTransactionSettings="showTransactionSettings"
                />
            </div>
            <div
                class="flex px-3 py-4 bg-gray-100 text-white dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            >
                <button class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center">
                    <cryptoicon symbol="eth" size="20" />
                    <h6 class="px-2">Ethereum</h6>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <input class="flex-1" :value="'0.0'" />
            </div>
            <div class="flex justify-center -my-3">
                <button
                    class="bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-white dark:border-gray-900 border-opacity-50 "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div
                class="flex px-3 py-4 bg-gray-100 text-white dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            >
                <button
                    class="bg-pink-600 dark:bg-blue-600 text-white font-bold flex items-center pl-3"
                    @click="showSelectTokenModal = true"
                >
                    <h6 class="pr-2">Select a token</h6>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <input class="flex-1" :value="'0.0'" />
            </div>
            <button
                class="w-full mt-2 py-3 bg-pink-100 text-pink-700 dark:bg-blue-900 dark:text-blue-200"
            >
                <h6>Connect Wallet</h6>
            </button>
        </div>

        <token-select
            v-if="showSelectTokenModal"
            @close="showSelectTokenModal = false"
        />
    </div>
</template>

<script>
import TokenSelect from "./TokenSelect.vue"
import TransactionSettingsModal from "./TransactionSettingsModal.vue"
export default {
    methods: {},
    name: "Swap",
    props: {
        msg: String,
    },
    data() {
        return {
            showTransactionSettings: false,
            showSelectTokenModal: false,
        }
    },
    components: {
        TransactionSettingsModal,
        TokenSelect,
    },
    async mounted() {},
}
</script>

<style scoped>
button {
    @apply px-2 py-2 rounded-2xl;
}
input {
    background: none;
    text-align: right;
}
p {
    @apply text-sm;
}
</style>
