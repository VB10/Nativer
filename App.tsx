import LoginPage from "./src/view/login/index";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";
import React from "react";
import AppControl from "./src/view/appControl";
import TabMain from "./src/view/home";
import { login, control, tab, tabSchool } from "./src/util";
import SchoolsPage from "./src/view/tab/school";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key={login} hideNavBar component={LoginPage} />
      <Scene key={control} hideNavBar component={AppControl}  initial />
      <Scene key={tab} tabs >
        <Scene component={SchoolsPage}   hideNavBar/>
        <Scene  component={SchoolsPage} hideNavBar/>
        <Scene  component={SchoolsPage} hideNavBar/>
    
      </Scene>
    </Stack>
  </Router>
);

export default App;
