<template>
    <div class="relative flex flex-col items-center group cursor-pointer">
        <QuestionMarkCircleIcon width="20" height="20" />
        <div
            class="absolute top-0 hidden flex-col items-center mt-6 group-hover:flex text-left"
        >
            <div
                class="w-3 h-3 -mb-2 transform rotate-45 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-500"
            />
            <span
                class="relative z-20 p-3 text-md leading-none whitespace-no-wrap w-max bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl shadow-md border-2 border-gray-200 dark:border-gray-500"
                style="max-width: 16rem; line-height: 1.1rem;"
            >
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script>
import { QuestionMarkCircleIcon } from '@vue-hero-icons/outline'
export default {
    name: 'Tooltip',
    components: { QuestionMarkCircleIcon },
    props: ['text'],
}
</script>

<style scoped></style>
