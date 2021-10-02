# Uniswapclone!

This is a uniswap ui clone built with Vue and TailwindCSS.

Project was intialized with `create-eth-app` to easily connect with the uniswap graphql api in the future (not required for this task but I want to continue developing this clone). UI is contained within `./packages/vue-app/` and is seperately servable.

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

Fully responsive UI.

Has main swap interface including 'Select a token' modal with 'Manage token list' interface and 'Transaction settings' modal.

Spoofs Metamask connection with `wallet.address` and `wallet.balance` etc.

Includes Dark mode.

Includes pool UI.

## To Complete
Real tokens, token lists data

Wallet connections 

Transaction settings

More menu items

Pool user functionality

Apollo api caching and refreshing

Tooltips


## Deployment Demo
https://uniswapclone.vercel.app/#/