<template>
    <div
        v-if="showTransactionSettings"
        class="w-full max-w-sm p-4 bg-gray-100 text-gray-700 rounded-2xl absolute right-0 top-10 border-2"
    >
        <div class="flex pb-2">
            <h6>Transaction Settings</h6>
        </div>
        <div class="flex pb-2">
            <p class="pr-2">Slippage tolerance</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <div class="flex pb-2">
            <button
                class="bg-pink-600 dark:bg-blue-600 text-white rounded-2xl"
            >
                <h6>Auto</h6>
            </button>
            <input class="flex-1 bg-white rounded-2xl py-1 px-2 ml-2 border-2" :value="'0.10%'" />
        </div>
        <div class="flex pb-2">
            <p class="pr-2">Transaction Deadline</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <div class="flex justify-start items-center pb-2">
            <input class="w-20 bg-white rounded-2xl py-1 px-2 border-2" :value="'20'" />
            <p class="pl-2">minutes</p>
        </div>
        <div class="flex pb-2">
            <h6>Interface Settings</h6>
        </div>
        <div class="flex justify-between items-center pb-2">
            <div class="flex pb-2">
                <p class="pr-2">Auto Router</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <button
                class="flex rounded-xl bg-white font-bold p-1"
            >
                <span class="active py-1 px-2 text-sm">On</span>
                <span class="py-1 px-2 text-sm">Off</span>
            </button>
        </div>

        <div class="flex justify-between items-center">
            <div class="flex pb-2">
                <p class="pr-2">Expert Mode</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <button
                class="flex rounded-xl bg-white font-bold p-1"
            >
                <span class="active py-1 px-2 text-sm">On</span>
                <span class="py-1 px-2 text-sm">Off</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {},
    name: "TransactionSettingsModal",
    props: {
        showTransactionSettings: Boolean,
    },
}
</script>

<style scoped>
button {
    @apply p-2 rounded-2xl;
}
input {
    background: none;
    text-align: right;
}
p {
    @apply text-sm;
}
</style>
