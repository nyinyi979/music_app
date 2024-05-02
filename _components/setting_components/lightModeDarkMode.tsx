import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Pressable, Text, View } from "react-native";
export default function DarkMode(){
  const [darkMode, setDarkMode] = React.useState(false);

  // check theme on each state change
  React.useEffect(() => {
    themeCheck();
  }, [darkMode]);  

  // check theme on mount
  React.useEffect(() => {
    themeCheck();
  }, []);  
  
  // check and reset theme
  const themeCheck = async() => {
    const theme = await AsyncStorage.getItem("darkMode");
    console.log(theme);
    if (theme === "dark") {
      UnistylesRuntime.setTheme('dark');
      setDarkMode(true);
    } else {
      UnistylesRuntime.setTheme('light');
      setDarkMode(true);
    }
  } 

  // called when theme button is pressed
  const toggleTheme = async() => {
    const theme = await AsyncStorage.getItem("darkMode");
    if (theme) {
      AsyncStorage.setItem("darkMode", theme === "dark" ? "light" : "dark");
    } else {
      AsyncStorage.setItem("darkMode", "dark");
    }
    setDarkMode(!darkMode);
  };

  return(
      <Pressable 
          onPress={toggleTheme}
          style={{flex:1}}>
          <Text style={{fontFamily:"Inika-Regular"}}>{darkMode? 'Change to light mode' : 'Change to dark mode' }</Text>
      </Pressable>
    )
}