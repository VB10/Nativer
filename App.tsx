import LoginPage from "./src/view/login/index";
import { Router, Stack, Scene, Tabs, Actions } from "react-native-router-flux";
import React, { Component } from "react";
import AppControl from "./src/view/appControl";
import TabMain from "./src/view/home";
import { login, control, tab, tabSchool } from "./src/util";
import SchoolsPage from "./src/view/tab/school";
import CustomTabBar from "./src/components/tabbar";
import SettingsPage from "./src/view/tab/settings";
import SchoolNavBar from "./src/view/tab/school/navBar";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/redux/reducers";

const ConnectedRouter = connect()(Router);
const store = createStore(reducers);

const Scenes = Actions.create(
    <Stack key="root">
      <Scene key={login} hideNavBar component={LoginPage} />
      <Scene key={control} hideNavBar component={AppControl} initial />
      <Scene key={tab} tabs tabBarComponent={CustomTabBar} hideNavBar>
        <Scene
          key="tab1"
          component={SchoolsPage}
          title="Schools"
          navBar={SchoolNavBar}
        />
        <Scene component={SchoolsPage} hideNavBar />
        <Scene key="tab2" component={SettingsPage} title="Settings" />
      </Scene>
    </Stack>
);

const BindRedux = () => {
  
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

