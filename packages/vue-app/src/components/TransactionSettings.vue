<template>
    <div
        v-if="showTransactionSettings"
        class="w-full max-w-sm p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl absolute right-0 top-10 border-2 border-gray-200 dark:border-gray-700"
    >
        <div class="flex pb-2 font-bold">
            <h6>Transaction Settings</h6>
        </div>
        <div class="flex pb-2">
            <p class="pr-2">Slippage tolerance</p>
            <tooltip
                text="These tokens are commonly paired with other tokens."
            />
        </div>
        <div class="flex pb-2">
            <button
                class="bg-pink-600 dark:bg-blue-600 text-white rounded-2xl px-2"
            >
                <h6>Auto</h6>
            </button>
            <input
                class="flex-1 bg-white rounded-2xl py-1 px-2 ml-2 border-2 border-gray-200 dark:border-gray-700"
                :value="'0.10%'"
            />
        </div>
        <div class="flex pb-2">
            <p class="pr-2">Transaction Deadline</p>
            <tooltip
                text="These tokens are commonly paired with other tokens."
            />
        </div>
        <div class="flex justify-start items-center pb-2">
            <input
                class="w-20 bg-white rounded-2xl py-1 px-2 border-2 border-gray-200 dark:border-gray-700"
                :value="'20'"
            />
            <p class="pl-2 font-bold">minutes</p>
        </div>
        <div class="flex pb-2 font-bold">
            <h6>Interface Settings</h6>
        </div>
        <div class="flex justify-between items-center pb-2">
            <div class="flex pb-2">
                <p class="pr-2">Auto Router</p>
                <tooltip
                    text="These tokens are commonly paired with other tokens."
                />
            </div>
            <button
                class="flex rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-white p-0.5"
            >
                <span
                    :class="
                        `rounded-lg py-0.5 px-2 text-sm ${
                            autoRouterSwitch
                                ? 'bg-pink-600 dark:bg-blue-600 text-white'
                                : ''
                        }`
                    "
                    @click="autoRouterSwitch = !autoRouterSwitch"
                    >On</span
                >
                <span
                    :class="
                        `rounded-lg py-0.5 px-2 text-sm ${
                            !autoRouterSwitch
                                ? 'bg-gray-300 dark:bg-gray-700'
                                : ''
                        }`
                    "
                    @click="autoRouterSwitch = !autoRouterSwitch"
                    >Off</span
                >
            </button>
        </div>

        <div class="flex justify-between items-center">
            <div class="flex pb-2">
                <p class="pr-2">Expert Mode</p>
                <tooltip
                    text="These tokens are commonly paired with other tokens."
                />
            </div>
            <button
                class="flex rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-white p-0.5"
            >
                <span
                    :class="
                        `rounded-lg py-0.5 px-2 text-sm ${
                            expertModeSwitch
                                ? 'bg-pink-600 dark:bg-blue-600 text-white'
                                : ''
                        }`
                    "
                    @click="expertModeSwitch = !expertModeSwitch"
                    >On</span
                >
                <span
                    :class="
                        `rounded-lg py-0.5 px-2 text-sm ${
                            !expertModeSwitch
                                ? 'bg-gray-300 dark:bg-gray-700'
                                : ''
                        }`
                    "
                    @click="expertModeSwitch = !expertModeSwitch"
                    >Off</span
                >
            </button>
        </div>
    </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
    methods: {
        //TODO: connect to real time transaction settings for swap
    },
    name: 'TransactionSettingsModal',
    props: {
        showTransactionSettings: Boolean,
    },
    data() {
        return {
            autoRouterSwitch: true,
            expertModeSwitch: true,
        }
    },
    components: { Tooltip },
}
</script>

<style scoped>
input {
    @apply text-right;
}
p {
    @apply text-sm;
}
</style>
