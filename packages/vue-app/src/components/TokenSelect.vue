<template>
    <div
        class="flex justify-center py-20 absolute w-full h-screen top-0"
    >
        <div class="bg-black bg-opacity-30 absolute w-full h-screen top-0" @click="$emit('close')" />
        <div
            class="w-full h-auto max-w-md bg-white text-black rounded-2xl shadow-md z-1 relative"
        >
            <div class="flex justify-between p-3">
                <div class="flex p-2">
                    <h6>Select a token</h6>
                </div>
                <div class="flex items-start">
                    <button @click="$emit('close')">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex pb-2 px-4">
                <input
                    class="flex-1"
                    placeholder="Search a name or paste address"
                />
            </div>
            <div class="flex py-2 px-4">
                <p class="pr-2 text-sm">Common Bases</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-700"
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
            <hr />
            <div class="overflow-scroll h-80">{{ tokens }}</div>
            <button class="w-full flex items-center justify-center mt-2 py-3 bg-gray-100 text-pink-600 font-bold">
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                </svg>
                <h6 class="ml-2">Manage Token Lists</h6>
            </button>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag"
export default {
    methods: {},
    name: "TokenSelect",
    props: {
        msg: String,
    },
    components: {},
    apollo: {
        tokens: gql`
            query {
                tokens {
                    symbol
                    name
                    decimals
                }
            }
        `,
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
    font-size: 1.25rem;
    @apply p-3 rounded-2xl border-2;
}
</style>
