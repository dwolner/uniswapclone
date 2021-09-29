import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import Vue from "vue"
import VueApollo from "vue-apollo"
import "./main.css"

import App from "./App.vue"
import Cryptoicon from 'vue-cryptoicon'
// For all icons
import icon from 'vue-cryptoicon/src/icons'
Cryptoicon.add(icon)
Vue.use(Cryptoicon)

Vue.config.productionTip = false

// Cache implementation
const cache = new InMemoryCache()

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app",
})

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
})

// Install the vue plugin
// With the apollo client instance
Vue.use(VueApollo, {
  apolloClient,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount("#app")
