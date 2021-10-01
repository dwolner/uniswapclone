<template>
    <div
        v-if="showTransactionSettings"
        class="w-full max-w-sm p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl absolute right-0 top-10 border-2 border-gray-200 dark:border-gray-700"
    >
        <div class="flex pb-2">
            <h6>Transaction Settings</h6>
        </div>
        <div class="flex pb-2">
            <p class="pr-2">Slippage tolerance</p>
            <QuestionMarkCircleIcon width="20" height="20" />
        </div>
        <div class="flex pb-2">
            <button class="bg-pink-600 dark:bg-blue-600 text-white rounded-2xl p-2">
                <h6>Auto</h6>
            </button>
            <input
                class="flex-1 bg-white rounded-2xl py-1 px-2 ml-2 border-2 border-gray-200 dark:border-gray-700"
                :value="'0.10%'"
            />
        </div>
        <div class="flex pb-2">
            <p class="pr-2">Transaction Deadline</p>
            <QuestionMarkCircleIcon width="20" height="20" />
        </div>
        <div class="flex justify-start items-center pb-2">
            <input
                class="w-20 bg-white rounded-2xl py-1 px-2 border-2 border-gray-200 dark:border-gray-700"
                :value="'20'"
            />
            <p class="pl-2">minutes</p>
        </div>
        <div class="flex pb-2">
            <h6>Interface Settings</h6>
        </div>
        <div class="flex justify-between items-center pb-2">
            <div class="flex pb-2">
                <p class="pr-2">Auto Router</p>
                <QuestionMarkCircleIcon width="20" height="20" />
            </div>
            <button class="flex rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-white font-bold p-1">
                <span :class="`rounded-xl py-1 px-2 text-sm ${autoRouterSwitch ? 'bg-gray-300 dark:bg-gray-700' : ''}`" @click="autoRouterSwitch = !autoRouterSwitch">On</span>
                <span :class="`rounded-xl py-1 px-2 text-sm ${!autoRouterSwitch ? 'bg-gray-300 dark:bg-gray-700' : ''}`" @click="autoRouterSwitch = !autoRouterSwitch">Off</span>
            </button>
        </div>

        <div class="flex justify-between items-center">
            <div class="flex pb-2">
                <p class="pr-2">Expert Mode</p>
                <QuestionMarkCircleIcon width="20" height="20" />
            </div>
            <button class="flex rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-white font-bold p-1">
                <span :class="`rounded-xl py-1 px-2 text-sm ${expertModeSwitch ? 'bg-gray-300 dark:bg-gray-700' : ''}`" @click="expertModeSwitch = !expertModeSwitch">On</span>
                <span :class="`rounded-xl py-1 px-2 text-sm ${!expertModeSwitch ? 'bg-gray-300 dark:bg-gray-700' : ''}`" @click="expertModeSwitch = !expertModeSwitch">Off</span>
            </button>
        </div>
    </div>
</template>

<script>
import { QuestionMarkCircleIcon } from "@vue-hero-icons/outline"
export default {
    methods: {},
    name: "TransactionSettingsModal",
    props: {
        showTransactionSettings: Boolean,
    },
    data() {
        return {
            autoRouterSwitch: true,
            expertModeSwitch: true,
        }
    },
    components: { QuestionMarkCircleIcon },
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
