import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import Vue from "vue"
import VueApollo from "vue-apollo"
import "./main.css"
import App from "./App.vue"
import store from "./store.js"

import Cryptoicon from "vue-cryptoicon"
import icon from "vue-cryptoicon/src/icons"
Cryptoicon.add(icon)

Vue.use(Cryptoicon)
Vue.config.productionTip = false

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
})

const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
})

Vue.use(VueApollo, {
  apolloClient,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  store,
  render: h => h(App),
}).$mount("#app")
