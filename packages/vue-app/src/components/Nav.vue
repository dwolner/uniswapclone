<template>
    <nav class="w-full">
        <div class="grid grid-cols-3 p-3">
            <div class="flex">
                <div class="hover:rotate-60 w-max">
                    <img src="../assets/uni_logo_black.svg" />
                </div>
            </div>
            <div class="flex justify-center">
                <Tabs />
            </div>
            <div class="flex justify-end">
                <button class="bg-gray-700 bg-opacity-80 text-white flex items-center">
					<cryptoicon symbol="eth" size="20" />
                    <h6 class="pl-2">Ethereum</h6>
                </button>
                <button class="bg-blue-800 bg-opacity-80 text-white">
                    <h6>Connect to a wallet</h6>
                </button>
                <button class="bg-black bg-opacity-80 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import Tabs from "./Tabs.vue"

export default {
    methods: {},
    name: "Nav",
    props: {
        msg: String,
    },
    components: {
        Tabs,
    },
    async mounted() {},
}
</script>

<style scoped>
	button {
		@apply px-3 py-2 mx-1 rounded-xl;
	}
</style>
