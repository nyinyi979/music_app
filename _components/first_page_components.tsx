import React from "react";
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import { DimensionValue, Easing, Text, View } from "react-native";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function AppTitle(){
    const {styles} = useStyles(styleSheet);
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
    const stopSharedValue = useSharedValue({color:"#00343E",offset:0});
    React.useEffect(()=>{
        stopSharedValue.value = withRepeat(withTiming({color:"#36C1DB",offset:1},{duration:2000}),0,true);
    },[])
    const stopAnimatedProps = useAnimatedProps(()=>({
        stopColor: stopSharedValue.value.color,
        offset: stopSharedValue.value.offset
    }))
    return(
        <View style={styles.titleContainer}>
            <Svg width="250" height="34" viewBox="0 0 250 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M24.912 0.927999L24.96 1.408C24.96 2.72 24.752 3.84 24.336 4.768C23.92 5.088 23.264 5.344 22.368 5.536L30.384 29.248L34.944 29.824C34.944 31.136 34.576 32.528 33.84 34H22.176L21.744 31.36C23.088 30.848 23.968 30.512 24.384 30.352L22.464 24.928H11.664C10.704 27.776 10.192 29.264 10.128 29.392L13.44 29.824C13.44 30.496 13.312 31.28 13.056 32.176C12.8 33.04 12.56 33.648 12.336 34H0.672L0.24 31.36C1.68 30.752 2.976 30.304 4.128 30.016L12.192 5.344C10.048 5.024 8.432 4.608 7.344 4.096C7.344 3.168 7.488 2.352 7.776 1.648C8.448 1.424 10.016 1.168 12.48 0.879997C14.976 0.559998 17.344 0.399998 19.584 0.399998C21.856 0.399998 23.632 0.575998 24.912 0.927999ZM18.72 14.128L17.328 7.792H16.848L15.312 14.416L13.056 20.416H21.072L18.72 14.128ZM50.6524 0.399998C54.7164 0.399998 57.7404 1.104 59.7244 2.512C61.7084 3.92 62.7004 6.48 62.7004 10.192C62.7004 13.296 61.7404 15.888 59.8204 17.968C57.9004 20.016 54.8284 21.04 50.6044 21.04C49.2284 21.04 48.1404 21.024 47.3404 20.992L47.2444 29.44L50.7484 29.824C50.7484 31.232 50.3804 32.624 49.6444 34H37.7884L37.3564 31.36C39.0204 30.688 40.3644 30.224 41.3884 29.968C41.3884 29.872 41.2444 21.408 40.9564 4.576C40.4444 4.448 39.1164 4.032 36.9724 3.328L37.3564 0.399998H50.6524ZM49.5964 16.48C51.7404 16.448 53.4044 15.856 54.5884 14.704C55.7724 13.552 56.3644 12.064 56.3644 10.24C56.3644 8.416 55.8364 7.12 54.7804 6.352C53.7564 5.552 52.1404 5.152 49.9324 5.152C49.0684 5.152 48.2524 5.168 47.4844 5.2C47.4204 10.256 47.3884 14.032 47.3884 16.528L49.5964 16.48ZM78.2618 0.399998C82.3258 0.399998 85.3498 1.104 87.3337 2.512C89.3178 3.92 90.3098 6.48 90.3098 10.192C90.3098 13.296 89.3498 15.888 87.4298 17.968C85.5098 20.016 82.4378 21.04 78.2138 21.04C76.8378 21.04 75.7498 21.024 74.9498 20.992L74.8538 29.44L78.3578 29.824C78.3578 31.232 77.9898 32.624 77.2538 34H65.3978L64.9658 31.36C66.6298 30.688 67.9738 30.224 68.9978 29.968C68.9978 29.872 68.8538 21.408 68.5658 4.576C68.0538 4.448 66.7258 4.032 64.5818 3.328L64.9658 0.399998H78.2618ZM77.2057 16.48C79.3498 16.448 81.0138 15.856 82.1978 14.704C83.3818 13.552 83.9738 12.064 83.9738 10.24C83.9738 8.416 83.4458 7.12 82.3898 6.352C81.3658 5.552 79.7498 5.152 77.5418 5.152C76.6778 5.152 75.8618 5.168 75.0938 5.2C75.0298 10.256 74.9978 14.032 74.9978 16.528L77.2057 16.48ZM137.252 4.672L137.108 34H130.964L115.124 8.176C114.996 17.552 114.916 24.624 114.884 29.392L118.196 29.824C118.196 31.136 117.828 32.528 117.092 34H105.428L104.996 31.36C106.788 30.624 108.132 30.16 109.028 29.968C109.028 29.872 108.884 21.408 108.596 4.576L104.612 3.328L104.996 0.399998H117.476L131.444 25.456L130.724 4.576L126.74 3.328L127.124 0.399998H139.604C139.572 0.399998 139.572 0.431998 139.604 0.495999C139.668 0.559999 139.732 0.703999 139.796 0.927999C139.892 1.12 139.988 1.36 140.084 1.648C140.276 2.16 140.404 3.008 140.468 4.192C138.836 4.448 137.764 4.608 137.252 4.672ZM165.771 0.927999L165.819 1.408C165.819 2.72 165.611 3.84 165.195 4.768C164.779 5.088 164.123 5.344 163.227 5.536L171.243 29.248L175.803 29.824C175.803 31.136 175.435 32.528 174.699 34H163.035L162.603 31.36C163.947 30.848 164.827 30.512 165.243 30.352L163.323 24.928H152.523C151.563 27.776 151.051 29.264 150.987 29.392L154.299 29.824C154.299 30.496 154.171 31.28 153.915 32.176C153.659 33.04 153.419 33.648 153.195 34H141.531L141.099 31.36C142.539 30.752 143.835 30.304 144.987 30.016L153.051 5.344C150.907 5.024 149.291 4.608 148.203 4.096C148.203 3.168 148.347 2.352 148.635 1.648C149.307 1.424 150.875 1.168 153.339 0.879997C155.835 0.559998 158.203 0.399998 160.443 0.399998C162.715 0.399998 164.491 0.575998 165.771 0.927999ZM159.579 14.128L158.187 7.792H157.707L156.171 14.416L153.915 20.416H161.931L159.579 14.128ZM201.256 24.208L205.672 0.399998H218.152C218.408 1.776 218.536 2.752 218.536 3.328C217 3.872 215.672 4.288 214.552 4.576L217.96 29.392L221.272 29.824C221.272 31.136 220.904 32.528 220.168 34H208.504L208.072 31.36C209.864 30.624 211.208 30.16 212.104 29.968L208.408 10.384L203.512 31.648H198.616L191.032 8.176L186.952 29.392L190.264 29.824C190.264 31.136 189.896 32.528 189.16 34H177.496L177.064 31.36C178.856 30.624 180.2 30.16 181.096 29.968L184.504 4.576L180.52 3.328L180.904 0.399998H194.344L200.776 24.208H201.256ZM234.936 5.2C234.936 8.848 234.904 11.984 234.84 14.608H239.736L240.216 11.296C241.848 11.296 243.432 11.696 244.968 12.496V22.096L241.8 22.24C241.032 21.088 240.584 20.08 240.456 19.216H234.792C234.728 23.696 234.696 27.072 234.696 29.344H242.904L243.96 25.168C245.944 25.168 247.448 25.264 248.472 25.456C248.952 27.28 249.192 28.944 249.192 30.448C249.192 31.92 249.144 33.104 249.048 34H225.24L224.808 31.36C226.888 30.56 228.232 30.096 228.84 29.968C228.808 28.08 228.776 25.424 228.744 22C228.616 14.32 228.504 8.512 228.408 4.576L224.424 3.328L224.808 0.399998H248.376C248.472 1.264 248.52 2.352 248.52 3.664C248.52 4.944 248.28 6.736 247.8 9.04C246.808 9.36 245.304 9.52 243.288 9.52L242.184 5.2H234.936Z" fill="url(#paint0_linear_52_256)"/>
                <Defs>
                <LinearGradient id="paint0_linear_52_256" x1="144.5" y1="43" x2="144.5" y2="-3.5" gradientUnits="userSpaceOnUse">
                <AnimatedStop animatedProps={stopAnimatedProps} />
                <Stop stopColor="#36C1DB" offset="1" />
                </LinearGradient>
                </Defs>
            </Svg>
        </View>

    )
}

declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}

export function WantLyrics(){
    const {styles} = useStyles(styleSheet,{origin:"left"});
    const sharedWidth = useSharedValue<DimensionValue>("100%");
    const animatedStyles = useAnimatedStyle(()=>({
        width: sharedWidth.value
    }))
    React.useEffect(()=>{
        sharedWidth.value = withTiming("0%",{duration:700,easing:Easing.sin});
    },[])
    return(
        <View style={{marginTop:20,marginBottom:10}}>
          <Text style={styles.subtitle}>Want lyrics? It is here!</Text>
          <Animated.View style={[styles.blackBlock,animatedStyles]}/>
        </View>
    )
}

export function WantChords(){
    const {styles} = useStyles(styleSheet,{origin:"right"});
    const sharedWidth = useSharedValue<DimensionValue>("100%");
    const animatedStyles = useAnimatedStyle(()=>({
        width: sharedWidth.value
    }))
    React.useEffect(()=>{
        sharedWidth.value = withDelay(200,withTiming("0%",{duration:700,easing:Easing.sin}));
    },[])
    return(
        <View style={{marginBottom:10}}>
          <Text style={styles.subtitle}>Want Chords? It is also here!</Text>
          <Animated.View style={[styles.blackBlock,animatedStyles]}/>
        </View>
    )
}


const styleSheet = createStyleSheet(()=>({
    titleContainer:{
        zIndex:4,
        marginTop:"80%"
    },
    subtitle: {
        fontSize: 20,
        color: "#61c5be",
        textAlign:"center",
        fontFamily:"Inika-Bold"
    },
    blackBlock: {
        backgroundColor: "#61c5be",
        height: "100%",
        position: "absolute",
        variants:{
            origin:{
                left:{
                    left: 0
                },
                right:{
                    right: 0
                }
            }
        }
    },
}))