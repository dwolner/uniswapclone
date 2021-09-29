<template>
    <div
        class="w-max grid grid-cols-4 rounded-xl bg-black bg-opacity-70 text-white font-bold"
        style="padding: .25rem;"
    >
        <button class="active">
            <h6>Swap</h6>
        </button>
        <button class="">
            <h6>Pool</h6>
        </button>
        <button class="">
            <h6>Vote</h6>
        </button>
        <button class="flex">
            <h6 class="pr-2">Charts</h6>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    methods: {},
    name: "Tabs",
    props: {
        msg: String,
    },
    components: [],
    async mounted() {},
}
</script>

<style scoped>
button {
    @apply px-2 py-2;
}
.active {
    @apply bg-gray-500 bg-opacity-80 rounded-xl;
}
</style>
