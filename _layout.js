import React from "react";
import "./lib/unistyles"
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const [] = useFonts({
      "Inika-Bold": require("../../assets/fonts/Inika-Bold.ttf"),
      "Inika-Regular": require("../../assets/fonts/Inika-Regular.ttf")
  });

  return (
    <GestureHandlerRootView style={{flex:1}}>
        
    </GestureHandlerRootView>
  );
}
