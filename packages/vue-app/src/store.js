import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    data: {
        darkMode: false
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
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})