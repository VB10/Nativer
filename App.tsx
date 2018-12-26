import { Router } from "react-native-router-flux";
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore ,applyMiddleware} from "redux";
import reducers from "./src/redux/reducers";
import AppRouter from "./src/view/Router";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const ConnectedRouter = connect()(Router);
const store = createStore(reducers,applyMiddleware(logger,thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={AppRouter} />
      </Provider>
    );
  }
}
