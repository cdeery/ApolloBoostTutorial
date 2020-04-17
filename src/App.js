import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import ExchangeRates from "./exchange_rates";
import "./styles.css";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Apollo Client Tutorial</h1>
        <h2>
          <ExchangeRates />
        </h2>
      </div>
    </ApolloProvider>
  );
}
