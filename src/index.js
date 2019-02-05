import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import "typeface-roboto"

import { InMemoryCache } from "apollo-cache-inmemory"
// import { HttpLink } from "apollo-link-http"
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { withClientState } from "apollo-link-state"

import "./index.css"
import App from "./App"

import { defaults } from "state/defaults"
import { resolvers } from "state/resolvers"
import { typeDefs } from "state/typeDefs"

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs })
})

const ReactApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<ReactApp />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
