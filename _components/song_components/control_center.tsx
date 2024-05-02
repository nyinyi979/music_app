import { Animated, DimensionValue, Pressable, View } from "react-native";
import { Next, PlayAndPause, Prev } from "../../_images/playBtns";
import React, { Dispatch, SetStateAction } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface ControlCenterProps {
    play: boolean, 
    setPlay: Dispatch<SetStateAction<boolean>>,
    width: DimensionValue,
    longestDuration: number
    totalDuration: number,
    setWidth: Dispatch<SetStateAction<DimensionValue>>
}

export default function ControlCenter({longestDuration,play,setPlay,setWidth,totalDuration,width}:ControlCenterProps){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.controlContainer}>
            <View style={{backgroundColor:"white",width:"100%",height:5,position:"relative",overflow:"hidden"}}>
                <Animated.View style={{position:"absolute",left:0,top:0,height:5,backgroundColor:"red",width:width}}/>
            </View>
            <View style={styles.controlBtnsContainer}>
                <View style={styles.controlEachBtnContainer}>
                    <Pressable>
                        <Prev />
                    </Pressable>
                </View>
                <View style={styles.controlEachBtnContainer}>
                    <Pressable onPress={()=>setPlay(!play)}>
                        <PlayAndPause play={play}/>
                    </Pressable>
                </View>
                <View style={styles.controlEachBtnContainer}>
                    <Pressable>
                        <Next />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    controlContainer:{
        flex:.05,
        paddingVertical:4
    },
    controlBtnsContainer:{
        width:"100%",
        alignSelf:"center",
        flexDirection:"row",
        paddingHorizontal:100
    },
    controlEachBtnContainer:{
        width:"33%",
        justifyContent:"center",
        alignContent:"center"
    },
}))