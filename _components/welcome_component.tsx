import React from "react";
import Swiper from "react-native-swiper";
import OutlinedButton from "../lib/ui/outlinedButton";
import C from "../_images/C";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppTitle, WantChords, WantLyrics } from "./first_page_components";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { LeftMusicIcon, RightMusicIcon } from "../_images/music_icon";
import {LeftLines, RightLines} from "../_images/lines";
import { Category, EveryArtist } from "./second_page_components";
import { SaveLocally, TransportChords } from "../_images/saveFile";
import { Link } from "expo-router";


export function FirstPage({swiper}:{swiper:React.MutableRefObject<Swiper>}){
    const {styles} = useStyles(styleSheet);
    return(
        <LinearGradient colors={["#BDF6F3","#78F8F0"]} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.container}>
            <View style={styles.main}>
                <LeftMusicIcon />
                <RightMusicIcon />
                <AppTitle />
                <WantLyrics />
                <WantChords />
                <C />
                <View style={{marginTop:"85%"}}>
                    <OutlinedButton onPress={()=>{swiper.current.scrollTo(1,true)}} title="Continue"/>
                </View>
            </View>
        </LinearGradient>
    )
}

export function SecondPage(){
    const {styles} = useStyles(styleSheet);
    return(
        <LinearGradient colors={["#BDF6F3","#78F8F0"]} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.container}>     
            <LeftLines />
            <RightLines />
            <EveryArtist />
            <Category />
            <SaveLocally />
            <TransportChords />
            <Link href={"/home"} style={{alignSelf:"center",marginTop:"30%"}}>
              <OutlinedButton title="To the APP, We GO!" />
            </Link>
        </LinearGradient>
    )
}

const styleSheet = createStyleSheet((theme)=>({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    paddingTop:"15%",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  btn:{
    alignSelf: "flex-end",
    justifyContent: "center",
  }
}));