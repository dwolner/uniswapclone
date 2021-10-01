import Vue from 'vue'
import Vuex from 'vuex'

//TODO: spoofing token and wallet data, pull real data from subgraph
import dummyTokens from './dummyTokens.js'
import dummyTokenLists from './dummyTokenLists.js'
import dummyWallets from './dummyWallets.js'

Vue.use(Vuex)

const state = {
    darkMode: false,
    showWalletConnectionModal: false,
    tokens: dummyTokens,
    tokenLists: dummyTokenLists,
    wallets: dummyWallets,
    selectedLists: [],
    swapToken: {
        from: 'ETH',
        to: ''
    },
    swapTokenAmount: {
        from: 0,
        to: 0
    },
    wallet: {
        //TODO: hardwired to metamask for testing
        type: 'metamask',
        address: '',
        balance: 0
    }
}

const actions = {
    toggleDarkMode({ commit, state }) {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (!state.darkMode) {
            commit('setDarkMode', true)
            document.documentElement.classList.add('dark')
        } else {
            commit('setDarkMode', false)
            document.documentElement.classList.remove('dark')
        }
    }
}

const mutations = {
    setDarkMode(state, val) {
        state.darkMode = val
    },
    setSwapToken(state, val) {
        state.swapToken[val.type] = val.symbol
    },
    updateSelectedLists(state, val) {
        if (state.selectedLists.includes(val)) {
            state.selectedLists.splice(state.selectedLists.indexOf(val), 1)
        } else {
            state.selectedLists.push(val)
        }
    },
    setSwapTokenAmount(state, val) {
        state.swapTokenAmount[val.type] = val.amount
    },
    setWalletAddress(state, val) {
        state.wallet.address = val
    },
    setShowWalletConnectionModal(state, val) {
        state.showWalletConnectionModal = val
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})