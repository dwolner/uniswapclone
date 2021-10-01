<template>
    <div
        class="px-3 py-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700"
    >
        <div class="flex">
            <slot />
            <input
                type="number"
                placeholder="0.0"
                v-model="swapTokenAmount[tokenSelectType]"
                @input="$emit('calculateExchangeForAmount')"
            />
        </div>
        <div
            v-if="wallet.address && tokenForSwapInput"
            class="flex justify-between text-gray-500 dark:text-gray-300"
        >
            <p>
                Balance: {{ walletBalanceFor }}
                {{ tokenForSwapInput.symbol }}
            </p>
            <p v-if="dollarAmountForToken">~$ {{ dollarAmountForToken }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SwapInput',
    props: ['tokenSelectType'],
    computed: {
        ...mapState(['tokens', 'swapToken', 'swapTokenAmount', 'wallet']),
        dollarAmountForToken() {
            let amountForTokenType = this.swapTokenAmount[this.tokenSelectType]
            return this.wallet.address && amountForTokenType
                ? parseFloat(
                      amountForTokenType * this.tokenForSwapCurrentPrice
                  ).toFixed(2)
                : ''
        },
        tokenForSwapInput() {
            return this.swapToken[this.tokenSelectType]
                ? this.tokens.find(
                      (token) =>
                          token.symbol === this.swapToken[this.tokenSelectType]
                  )
                : false
        },
        tokenForSwapCurrentPrice() {
            //TODO: pull in real time price for tokenForSwapInput.symbol
            return 3000
        },
        walletBalanceFor() {
            //TODO: find real wallet balance for tokenForSwapInput.symbol
            return this.wallet.balance
        },
    },
}
</script>

<style scoped>
input {
    @apply flex-1 text-xl bg-transparent text-right;
}
p {
    @apply pt-2 px-1 text-sm;
}
</style>
