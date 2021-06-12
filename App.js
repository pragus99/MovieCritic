import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./navigation/DrawerNavigation";

export default function App() {
  const [Isfonts, setIsfonts] = useState(false);

  const fonts = async () => {
    await Font.loadAsync({
      "firasans-regular": require("./assets/fonts/FiraSans-Regular.ttf"),
      "firasans-bold": require("./assets/fonts/FiraSans-Bold.ttf"),
    });
    setIsfonts(true);
  };

  useEffect(() => {
    fonts();
  }, []);

  if (Isfonts) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onError={null}
        onFinish={() => setIsfonts(true)}
      />
    );
  }
}
