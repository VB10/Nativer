import LoginPage from "./src/view/login/index";
import { Router, Stack, Scene } from "react-native-router-flux";
import React from "react";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" hideNavBar component={LoginPage} />
    </Stack>
  </Router>
);

export default App;
