<template>
    <div class="flex justify-center py-20 absolute w-full h-screen top-0 z-10">
        <div
            class="bg-black bg-opacity-30 absolute w-full h-screen top-0"
            @click="$emit('close')"
        />
        <token-select-template
            v-if="!showManageTokenLists"
            :tokenSelectType="tokenSelectType"
            @showManageTokenLists="showManageTokenLists = true"
            @close="$emit('close')"
        />
        <manage-token-lists-template
            v-else
            @hideManageTokenLists="showManageTokenLists = false"
            @close="$emit('close')"
        />
    </div>
</template>

<script>
// import gql from 'graphql-tag'
import TokenSelectTemplate from './TokenSelectTemplate.vue'
import ManageTokenListsTemplate from './ManageTokenListsTemplate.vue'

export default {
    props: ['tokenSelectType'],
    name: 'TokenSelectModal',
    data() {
        return {
            showManageTokenLists: false,
        }
    },
    components: {
        TokenSelectTemplate,
        ManageTokenListsTemplate,
    },
}
</script>

<style scoped></style>
