import { Router } from "react-native-router-flux";
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";
import AppRouter from "./src/view/Router";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";

const ConnectedRouter = connect()(Router);
const store = createStore(reducers, applyMiddleware(thunk,logger));

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <ConnectedRouter>{AppRouter}</ConnectedRouter>
        </Provider>
      </StyleProvider>
    );
  }
}
