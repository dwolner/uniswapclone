<template>
    <div
        v-if="showNavSettings"
        class="w-full p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-2xl absolute right-0 top-12 border-2 border-gray-200 dark:border-gray-700"
        style="max-width: 12rem;"
    >
        <div
            class="flex justify-between p-2 cursor-pointer hover:text-black dark:hover:text-white"
        >
            <h6>About</h6>
            <InformationCircleIcon width="18" height="18" />
        </div>
        <div
            class="flex justify-between p-2 cursor-pointer hover:text-black dark:hover:text-white"
        >
            <h6>Docs</h6>
            <BookOpenIcon width="18" height="18" />
        </div>
        <div
            class="flex justify-between p-2 cursor-pointer hover:text-black dark:hover:text-white"
            @click="$store.dispatch('toggleDarkMode')"
        >
            <h6>Dark Theme</h6>
            <SunIcon width="18" height="18" />
        </div>
    </div>
</template>

<script>
import {
    InformationCircleIcon,
    BookOpenIcon,
    SunIcon,
} from '@vue-hero-icons/outline'

export default {
    methods: {},
    name: 'NavSettingsModal',
    props: {
        showNavSettings: Boolean,
    },
    components: {
        InformationCircleIcon,
        BookOpenIcon,
        SunIcon,
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
