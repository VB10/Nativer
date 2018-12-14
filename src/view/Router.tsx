import React from "react";
import { Actions, Stack, Scene } from "react-native-router-flux";
import { login, control, tab } from "../util";
import LoginPage from "./login";
import AppControl from "./appControl";
import CustomTabBar from "../components/tabbar";
import SchoolsPage from "./tab/school";
import SchoolNavBar from "./tab/school/navBar";
import settings from "./tab/settings";
const AppRouter = Actions.create(
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
        <Scene key="tab2" component={settings} title="Settings"  initial/>
      </Scene>
    </Stack>
);

export default AppRouter