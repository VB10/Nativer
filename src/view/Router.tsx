import React from "react";
import { Actions, Stack, Scene } from "react-native-router-flux";
import LoginPage from "./login";
import AppControl from "./appControl";
import CustomTabBar from "../components/tabbar";
import SchoolsPage from "./tab/school";
import SchoolNavBar from "./tab/school/navBar";
import settings from "./tab/settings";
import SchoolDetailPage from "./tab/school/detail";
import { PageKey } from "../util";


const AppRouter = Actions.create(
  <Stack key="root">
    <Scene key={PageKey.login} hideNavBar component={LoginPage} />
    <Scene key={PageKey.control} hideNavBar component={AppControl} initial />
    <Scene key={PageKey.tab} tabs tabBarComponent={CustomTabBar} hideNavBar>

      <Stack>
      <Scene
        key={PageKey.tabSchool}
        component={SchoolsPage}
        title="Schools"
        navBar={SchoolNavBar}
      />
        <Scene key={PageKey.tabSchoolDetail} component={SchoolDetailPage}/>
      </Stack>
      <Scene key="tab2" component={settings} title="Settings" />
    </Scene>
  </Stack>
);

export default AppRouter;
