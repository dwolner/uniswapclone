<template>
    <button
        class="flex rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-white font-bold p-1"
    >
        <router-link :to="tab.path" v-for="tab in tabs" :key="tab.name">
            <div class="py-1 px-3 mx-1 rounded-xl">
                {{ tab.name }}
            </div>
        </router-link>
        <span
            class="flex py-1 px-3 mx-1 rounded-xl"
            @click="openLink('https://info.uniswap.org/#/')"
        >
            <div class="mr-1">Charts</div>
            <ExternalLinkIcon width="12" height="12" />
        </span>
    </button>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
export default {
    methods: {
        openLink(url) {
            window.open(url)
        },
    },
    name: 'Tabs',
    data() {
        return {
            activeTab(tab) {
                return tab.path === window.location.pathname
            },
            tabs: [
                {
                    name: 'Swap',
                    path: '/',
                },
                {
                    name: 'Pool',
                    path: '/pool',
                },
                {
                    name: 'Vote',
                    path: '/vote',
                },
            ],
        }
    },
    components: { ExternalLinkIcon },
    async mounted() {},
}
</script>

<style scoped>
.router-link-exact-active div {
    background-color: rgb(209, 213, 219);
}

.dark .router-link-exact-active div {
    background-color: rgb(55, 65, 81);
}
</style>
