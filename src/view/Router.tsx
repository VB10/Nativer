import React from "react";
import {
  Actions,
  Stack,
  Scene,
  Tabs,
  Modal,
  Lightbox
} from "react-native-router-flux";
import LoginPage from "./login";
import AppControl from "./appControl";
import CustomTabBar from "../components/tabbar";
import SchoolsPage from "./tab/school";
import SchoolNavBar from "./tab/school/navBar";
import settings from "./tab/settings";
import SchoolDetailPage from "./tab/school/detail";
import { PageKey } from "../util";
import DemoLightbox from "./tab/center";
import { View } from "react-native";
import IconCustomT from "../components/tabbar/iconDemo";
import { Icon } from "native-base";
import IconCustomCenterT from "../components/tabbar/centerIcon";
import { Text } from "react-native";
const AppRouter = Actions.create(
  <Stack key="root">
    <Scene key={PageKey.login} hideNavBar component={LoginPage} />
    <Scene key={PageKey.control} hideNavBar component={AppControl} initial />
    <Tabs
      key={PageKey.tab}
      hideNavBar
      showLabel={false}
      tabBarStyle={{
        backgroundColor: "white",
        borderTopColor: "transparent"
      }}
    >
      <Scene
        key={PageKey.tabSchool}
        component={SchoolsPage}
        navBar={SchoolNavBar}
        iconName="bookmark"
        icon={IconCustomT}
      />
      <Scene
        key="customLight1"
        icon={IconCustomCenterT}
        component={DemoLightbox}
      />

      <Scene
        key="tab2"
        component={settings}
        isTransitioning
        title="Settings"
        iconName="cpu"
        icon={IconCustomT}
      />
    </Tabs>

    <Scene key="customLight" icon={IconCustomT} component={DemoLightbox} />
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
