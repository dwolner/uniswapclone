<template>
    <div class="flex justify-center py-12 px-4">
        <div
            class="w-full max-w-md p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-white font-bold rounded-2xl shadow-md"
        >
            <div class="grid grid-cols-2 relative">
                <div class="flex justify-left p-2 pb-3">
                    <h6>Swap</h6>
                </div>
                <div class="flex justify-end items-start">
                    <button
                        @click="
                            showTransactionSettings = !showTransactionSettings
                        "
                    >
                        <CogIcon width="22" height="22" />
                    </button>
                </div>
                <transaction-settings-modal
                    :showTransactionSettings="showTransactionSettings"
                />
            </div>
            <!-- <div
                class="px-3 py-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            >
                <div class="flex">
                    <button
                        class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center"
                        @click="
                            ;(tokenSelectType = 'from'),
                                (showSelectTokenModal = true)
                        "
                    >
                        <cryptoicon :symbol="fromToken.symbol" size="20" />
                        <h6 class="px-2">{{ fromToken.symbol }}</h6>
                        <ChevronDownIcon width="18" height="18" />
                    </button>
                    <input
                        type="number"
                        placeholder="0.0"
                        class="flex-1 text-xl"
                        v-model="swapTokenAmount.from"
                        @input="calculateExchangeForAmount('from')"
                    />
                </div>
                <div
                    class="flex justify-between text-gray-500 dark:text-gray-300"
                >
                    <p
                        v-if="this.$store.state.wallet.address"
                        class="pt-2 px-1"
                    >
                        Balance: {{ walletBalanceFor(fromToken.symbol) }}
                        {{ fromToken.symbol }}
                    </p>
                    <p
                        v-if="dollarAmountForToken('from', fromToken.symbol)"
                        class="pt-2 px-1"
                    >
                        ~$ {{ dollarAmountForToken('from', fromToken.symbol) }}
                    </p>
                </div>
            </div> -->
            <swap-input tokenSelectType="from" @calculateExchangeForAmount="calculateExchangeForAmount('from')">
                <button
                    class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center"
                    @click="
                        ;(tokenSelectType = 'from'),
                            (showSelectTokenModal = true)
                    "
                >
                    <cryptoicon :symbol="fromToken.symbol" size="20" />
                    <h6 class="px-2">{{ fromToken.symbol }}</h6>
                    <ChevronDownIcon width="18" height="18" />
                </button>
            </swap-input>
            <div class="flex justify-center -my-3">
                <button
                    class="bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-white dark:border-gray-900 border-opacity-50 "
                    @click="switchToAndFromTokensandAmounts()"
                >
                    <ArrowDownIcon width="12" height="12" />
                </button>
            </div>
            <swap-input tokenSelectType="to" @calculateExchangeForAmount="calculateExchangeForAmount('to')">
                <button
                    v-if="!this.swapToken.to"
                    class="bg-pink-600 dark:bg-blue-600 text-white font-bold flex items-center"
                    @click="
                        ;(tokenSelectType = 'to'), (showSelectTokenModal = true)
                    "
                >
                    <h6 class="px-2">Select a token</h6>
                    <ChevronDownIcon width="18" height="18" />
                </button>
                <button
                    v-else
                    class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center"
                    @click="
                        ;(tokenSelectType = 'to'), (showSelectTokenModal = true)
                    "
                >
                    <cryptoicon :symbol="toToken.symbol" size="20" />
                    <h6 class="px-2">{{ toToken.symbol }}</h6>
                    <ChevronDownIcon width="18" height="18" />
                </button>
            </swap-input>
            <!-- <div
                class="px-3 py-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            >
                <div class="flex">
                    <button
                        v-if="!this.swapToken.to"
                        class="bg-pink-600 dark:bg-blue-600 text-white font-bold flex items-center"
                        @click="
                            ;(tokenSelectType = 'to'),
                                (showSelectTokenModal = true)
                        "
                    >
                        <h6 class="px-2">Select a token</h6>
                        <ChevronDownIcon width="18" height="18" />
                    </button>
                    <button
                        v-else
                        class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white flex items-center"
                        @click="
                            ;(tokenSelectType = 'to'),
                                (showSelectTokenModal = true)
                        "
                    >
                        <cryptoicon :symbol="toToken.symbol" size="20" />
                        <h6 class="px-2">{{ toToken.symbol }}</h6>
                        <ChevronDownIcon width="18" height="18" />
                    </button>
                    <input
                        type="number"
                        placeholder="0.0"
                        class="flex-1 text-xl"
                        v-model="swapTokenAmount.to"
                        @input="calculateExchangeForAmount('to')"
                    />
                </div>
                <div
                    v-if="this.swapToken.to"
                    class="flex justify-between text-gray-500 dark:text-gray-300"
                >
                    <p class="pt-2 px-1">
                        Balance: {{ walletBalanceFor(toToken.symbol) }}
                        {{ toToken.symbol }}
                    </p>
                    <p
                        v-if="dollarAmountForToken('to', toToken.symbol)"
                        class="pt-2 px-1"
                    >
                        ~$ {{ dollarAmountForToken('to', toToken.symbol) }}
                    </p>
                </div>
            </div> -->
            <div
                v-if="exchangeRate"
                class="flex justify-end items-center text-gray-600 dark:text-gray-300"
            >
                <p class="p-1">
                    1 {{ toToken.symbol }} = {{ 1 * exchangeRate }}
                    {{ fromToken.symbol }}
                </p>
                <InformationCircleIcon width="16" height="16" />
            </div>
            <button
                class="w-full mt-2 bg-pink-100 text-pink-700 dark:bg-blue-900 dark:text-blue-200"
                @click="swapAction()"
            >
                <h6 class="py-1">{{ swapActionMessage }}</h6>
            </button>
        </div>

        <token-select
            v-if="showSelectTokenModal"
            @close="showSelectTokenModal = false"
            @userSelectedToken="storeUserTokenSelect"
            @userSelectedList="storeUserSelectedList"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TokenSelect from './TokenSelect.vue'
import TransactionSettingsModal from './TransactionSettingsModal.vue'
import {
    ChevronDownIcon,
    CogIcon,
    ArrowDownIcon,
    InformationCircleIcon,
} from '@vue-hero-icons/outline'
import SwapInput from './SwapInput.vue'

export default {
    methods: {
        storeUserTokenSelect(symbol) {
            this.$store.commit('setSwapToken', {
                type: this.tokenSelectType,
                symbol,
            })
        },
        storeUserSelectedList(name) {
            this.$store.commit('updateSelectedLists', name)
        },
        walletBalanceFor() {
            //TODO: find real wallet balance for token symbol
            return this.$store.state.wallet.balance
        },
        swapAction() {
            if (!this.$store.state.wallet.address) {
                this.$store.commit('setShowWalletConnectionModal', true)
            }
        },
        getCurrentPriceFor() {
            //TODO: pull in real time price for selected token
            return 3000
        },
        calculateExchangeForAmount(type) {
            let newAmount = 0
            let amountToExchange = this.$store.state.swapTokenAmount[type]
            if (this.$store.state.wallet.address) {
                if (
                    this.$store.state.swapToken.from &&
                    this.$store.state.swapToken.to
                ) {
                    newAmount = amountToExchange * this.exchangeRate
                }
            }
            this.$store.commit('setSwapTokenAmount', {
                type: type === 'to' ? 'from' : 'to',
                amount: newAmount,
            })
        },
        switchToAndFromTokensandAmounts() {
            let fromTokenSymbol = this.$store.state.swapToken.from
            let toTokenSymbol = this.$store.state.swapToken.to
            if (fromTokenSymbol && toTokenSymbol) {
                this.$store.commit('setSwapToken', {
                    type: 'from',
                    symbol: toTokenSymbol,
                })
                this.$store.commit('setSwapToken', {
                    type: 'to',
                    symbol: fromTokenSymbol,
                })
            }

            let fromTokenAmount = this.$store.state.swapTokenAmount.from
            let toTokenAmount = this.$store.state.swapTokenAmount.to
            if (fromTokenAmount && toTokenAmount) {
                this.$store.commit('setSwapTokenAmount', {
                    type: 'from',
                    amount: toTokenAmount,
                })
                this.$store.commit('setSwapTokenAmount', {
                    type: 'to',
                    amount: fromTokenAmount,
                })
            }
        },
    },
    name: 'Swap',
    data() {
        return {
            showTransactionSettings: false,
            showSelectTokenModal: false,
            tokenSelectType: 'from',
            dollarAmountForToken(type, symbol) {
                let amountForTokenType = this.$store.state.swapTokenAmount[type]
                return this.$store.state.wallet.address && amountForTokenType
                    ? parseFloat(
                          amountForTokenType * this.getCurrentPriceFor(symbol)
                      ).toFixed(2)
                    : ''
            },
        }
    },
    computed: {
        ...mapState([
            'tokens',
            'swapToken',
            'swapTokenAmount',
            'selectedLists',
        ]),
        fromToken() {
            return this.tokens.find(
                (token) => token.symbol === this.swapToken.from
            )
        },
        toToken() {
            return this.tokens.find(
                (token) => token.symbol === this.swapToken.to
            )
        },
        swapActionMessage() {
            let msg = ''
            if (this.$store.state.wallet.address) {
                if (
                    this.$store.state.swapToken.from &&
                    this.$store.state.swapToken.to
                ) {
                    if (
                        this.$store.state.swapTokenAmount.to ||
                        this.$store.state.swapTokenAmount.from
                    ) {
                        if (this.$store.state.wallet.balance) {
                            msg = 'Swap'
                        } else {
                            msg = 'Insufficient Balance'
                        }
                    } else {
                        msg = 'Enter an amount'
                    }
                } else {
                    msg = 'Select a token'
                }
            } else {
                msg = 'Connect Wallet'
            }
            return msg
        },
        exchangeRate() {
            // TODO: pull in real time exchange rates for selected tokens
            return this.$store.state.swapToken.from &&
                this.$store.state.swapToken.to
                ? 0.543
                : 0
        },
    },
    components: {
        TransactionSettingsModal,
        TokenSelect,
        ChevronDownIcon,
        ArrowDownIcon,
        CogIcon,
        InformationCircleIcon,
        SwapInput,
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
    text-align: right;
}
p {
    @apply text-sm;
}
</style>
