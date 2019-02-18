import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./src/Store";
import RootStack from "./src/Navigator";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RootStack />
      </Provider>
    );
  }
}
