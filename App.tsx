import { Router } from "react-native-router-flux";
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/redux/reducers";
import AppRouter from "./src/view/Router";

const ConnectedRouter = connect()(Router);
const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={AppRouter} />
      </Provider>
    );
  }
}
