<template>
    <div
        v-if="showPoolMore"
        class="w-full p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-2xl absolute left-2 top-10 border-2 border-gray-200 dark:border-gray-700"
        style="max-width: 12rem;"
    >
        <div
            class="flex justify-between p-2 cursor-pointer hover:text-black dark:hover:text-white"
        >
            <h6>Create a pool</h6>
            <InformationCircleIcon width="18" height="18" />
        </div>
        <div
            class="flex justify-between p-2 cursor-pointer hover:text-black dark:hover:text-white"
        >
            <h6>Migrate</h6>
            <BookOpenIcon width="18" height="18" />
        </div>
    </div>
</template>

<script>
import { InformationCircleIcon, BookOpenIcon } from '@vue-hero-icons/outline'

export default {
    methods: {},
    name: 'PoolMore',
    props: {
        showPoolMore: Boolean,
    },
    components: {
        InformationCircleIcon,
        BookOpenIcon,
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
