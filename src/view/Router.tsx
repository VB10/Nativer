import React from "react";
import {
  Actions,
  Stack,
  Scene,
  Tabs,
  Modal,
  Lightbox,
  Overlay
} from "react-native-router-flux";
import LoginPage from "./login";
import AppControl from "./appControl";
import CustomTabBar from "../components/tabbar";
import SchoolsPage from "./tab/school";
import SchoolNavBar from "./tab/school/navBar";
import settings from "./tab/settings";
import SchoolDetailPage from "./tab/school/detail";
import { PageKey } from "../util";
import CenterAction from "./tab/center";
import TabMain from "./home";

const AppRouter =(
  <Overlay key="overlay">
      <Stack key="root">
        <Scene key={PageKey.login} hideNavBar component={LoginPage} />
        <Scene
          key={PageKey.control}
          hideNavBar
          component={AppControl}
          initial
        />
        <Tabs key={PageKey.tab} hideNavBar tabBarComponent={CustomTabBar}>
          <Scene
            key={PageKey.tabSchool}
            component={SchoolsPage}
            title="Schools"
            navBar={SchoolNavBar}
            iconName="bookmark"
          />

          <Scene
            key={PageKey.tabSettings}
            component={settings}
            isTransitioning
            title="Settings"
            rightTitle="cpu"
            iconName="cpu"
          />
        </Tabs>

        <Scene key="modal" modal component={TabMain} title="Modal" hideNavBar />
        <Scene
          key={PageKey.tabSchoolDetail}
          hideTabBar={true}
          hideNavBar
          component={SchoolDetailPage}
        />
      </Stack>
  </Overlay>
);

export default AppRouter;
