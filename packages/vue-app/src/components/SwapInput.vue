<template>
    <div
        class="px-3 py-4 font-bold bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700"
    >
        <div class="flex">
            <slot />
            <input
                type="number"
                placeholder="0.0"
                v-model="inputModel"
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
        inputModel: {
            set(val) {
                this.tokenForSwapInput && this.wallet.address
                    ? this.$store.commit('setSwapTokenAmount', {
                          type: this.tokenSelectType,
                          amount: val,
                      })
                    : ''
            },
            get() {
                return this.tokenForSwapInput && this.wallet.address
                    ? this.swapTokenAmount[this.tokenSelectType]
                    : ''
            },
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
    @apply flex-1 text-sm md:text-xl bg-transparent text-right;
}
p {
    @apply pt-2 px-1 text-sm;
}
</style>
