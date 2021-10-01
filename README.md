# Uniswapclone!

This is a uniswap ui clone built with Vue and TailwindCSS.

Project was intialized with `create-eth-app` to easily connect with the uniswap graphql api. UI is contained within `./packages/vue-app/` and is seperately servable.

Requires `yarn`, `node`, `npm`.
```
//install
yarn install

//serve
yarn vue-app:serve

//build
yarn vue-app:build
```
## Current Features
Keeps state using Vuex.
Routing with Vue Router: `/` and `/pool`.
Has main swao interface including 'Select a token' modal with 'Manage token list' interface and 'Transaction settings' modal.
Spoofs Metamask connection with `wallet.address` and `wallet.balance` etc.
Includes Dark mode.
Includes pool UI.

## Deployment Demo
https://uniswapclone-4wkxoqgvr-dwolner.vercel.app/#/