import React from "react";
import { Actions, Stack, Scene, Tabs } from "react-native-router-flux";
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
    <Tabs key={PageKey.tab} hideNavBar   tabBarComponent={CustomTabBar}>
      <Scene
        key={PageKey.tabSchool}
        component={SchoolsPage}
        title="Schools"
        navBar={SchoolNavBar}
      />

      <Scene key="tab2" component={settings} title="Settings" />
    </Tabs>
    <Scene
      key={PageKey.tabSchoolDetail}
      hideTabBar={true}
      hideNavBar
      onEnter={() => {}}
      component={SchoolDetailPage}
    />
  </Stack>
);

export default AppRouter;
