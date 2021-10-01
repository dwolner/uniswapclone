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
            <swap-input
                tokenSelectType="from"
                @calculateExchangeForAmount="calculateExchangeForAmount('from')"
            >
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
                    class="bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white border-2 border-white dark:border-gray-900 border-opacity-50"
                    @click="switchToAndFromTokensandAmounts()"
                >
                    <ArrowDownIcon width="12" height="12" />
                </button>
            </div>
            <swap-input
                tokenSelectType="to"
                @calculateExchangeForAmount="calculateExchangeForAmount('to')"
            >
                <button
                    v-if="!swapToken.to"
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
            <div
                v-if="exchangeRate"
                class="flex justify-end items-center text-gray-600 dark:text-gray-300"
            >
                <p class="p-1 text-sm">
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

        <transition name="fade">
            <token-select
                v-if="showSelectTokenModal"
                @close="showSelectTokenModal = false"
                @userSelectedToken="storeUserTokenSelect"
                @userSelectedList="storeUserSelectedList"
            />
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TokenSelect from './TokenSelect.vue'
import TransactionSettingsModal from './TransactionSettingsModal.vue'
import SwapInput from './SwapInput.vue'
import {
    ChevronDownIcon,
    CogIcon,
    ArrowDownIcon,
    InformationCircleIcon,
} from '@vue-hero-icons/outline'

export default {
    name: 'Swap',
    data() {
        return {
            showTransactionSettings: false,
            showSelectTokenModal: false,
            tokenSelectType: 'from',
        }
    },
    computed: {
        ...mapState([
            'tokens',
            'swapToken',
            'swapTokenAmount',
            'selectedLists',
            'wallet',
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
            if (this.wallet.address) {
                if (this.swapToken.from && this.swapToken.to) {
                    if (this.swapTokenAmount.to || this.swapTokenAmount.from) {
                        if (this.wallet.balance) {
                            msg = 'Swap'
                        } else {
                            msg = `Insufficient ${this.swapToken.from} Balance`
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
            return this.swapToken.from && this.swapToken.to ? 0.543 : 0
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
    methods: {
        storeUserTokenSelect(symbol) {
            this.$store.commit('setSwapToken', {
                type: this.tokenSelectType,
                symbol,
            })
            this.calculateExchangeForAmount(
                this.swapTokenAmount.from === 'from' ? 'to' : 'from'
            )
        },
        storeUserSelectedList(name) {
            this.$store.commit('updateSelectedLists', name)
        },
        swapAction() {
            //TODO: add more swap actions for states
            if (!this.wallet.address) {
                this.$store.commit('setShowWalletConnectionModal', true)
            }
        },
        calculateExchangeForAmount(type) {
            let newAmount = 0
            let amountToExchange = this.swapTokenAmount[type]
            if (this.wallet.address) {
                if (this.swapToken.from && this.swapToken.to) {
                    newAmount = amountToExchange * this.exchangeRate
                }
            }
            this.$store.commit('setSwapTokenAmount', {
                type: type === 'to' ? 'from' : 'to',
                amount: newAmount,
            })
        },
        switchToAndFromTokensandAmounts() {
            let fromTokenSymbol = this.swapToken.from
            let toTokenSymbol = this.swapToken.to
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

            let fromTokenAmount = this.swapTokenAmount.from
            let toTokenAmount = this.swapTokenAmount.to
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
}
</script>

<style scoped>
button {
    @apply px-2 py-2 rounded-2xl;
}
</style>
