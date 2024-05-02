import React from "react";
import Animated, { useAnimatedProps, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import { View } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function LeftMusicIcon(){
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
    const stopSharedValue = useSharedValue({color:"#4AD1C9",offset:0});
    React.useEffect(()=>{
        stopSharedValue.value = withDelay(500,withRepeat(withTiming({color:"#4AD1C9",offset:1},{duration:2000}),0,true));
    },[])
    const stopAnimatedProps = useAnimatedProps(()=>({
        stopColor: stopSharedValue.value.color,
        offset: stopSharedValue.value.offset
    }));

    const {styles} = useStyles(styleSheet,{position:"left"});
    return(
      <View style={styles.music}>
        <Svg width="189" height="189" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/Svg">
          <Path d="M36.8324 164.258L67.999 158.024C69.5383 157.716 70.3079 157.563 70.7613 157.01C71.2146 156.457 71.2146 155.672 71.2146 154.102V126.048H36.0479C34.1623 126.048 33.2195 126.048 32.6337 126.634C32.0479 127.219 32.0479 128.162 32.0479 130.048V160.335C32.0479 162.593 32.0479 163.722 32.7799 164.322C33.512 164.922 34.6188 164.7 36.8324 164.258Z" fill="url(#paint0_linear_52_195)"/>
          <Path d="M115.166 148.591L146.332 142.358C147.872 142.05 148.641 141.896 149.095 141.343C149.548 140.79 149.548 140.005 149.548 138.435V110.381H114.381C112.496 110.381 111.553 110.381 110.967 110.967C110.381 111.553 110.381 112.496 110.381 114.381V144.669C110.381 146.926 110.381 148.055 111.113 148.655C111.845 149.255 112.952 149.034 115.166 148.591Z" fill="url(#paint1_linear_52_195)"/>
          <Path d="M36.8324 164.258L67.999 158.024C69.5383 157.716 70.3079 157.563 70.7613 157.01C71.2146 156.457 71.2146 155.672 71.2146 154.102V126.048H36.0479C34.1623 126.048 33.2195 126.048 32.6337 126.634C32.0479 127.219 32.0479 128.162 32.0479 130.048V160.335C32.0479 162.593 32.0479 163.722 32.7799 164.322C33.512 164.922 34.6188 164.7 36.8324 164.258Z" stroke="url(#paint2_linear_52_195)" strokeWidth="2"/>
          <Path d="M115.166 148.591L146.332 142.358C147.872 142.05 148.641 141.896 149.095 141.343C149.548 140.79 149.548 140.005 149.548 138.435V110.381H114.381C112.496 110.381 111.553 110.381 110.967 110.967C110.381 111.553 110.381 112.496 110.381 114.381V144.669C110.381 146.926 110.381 148.055 111.113 148.655C111.845 149.255 112.952 149.034 115.166 148.591Z" stroke="url(#paint3_linear_52_195)" strokeWidth="2"/>
          <Path d="M71.2146 126.048H36.0479C34.1623 126.048 33.2195 126.048 32.6337 126.634C32.0479 127.22 32.0479 128.162 32.0479 130.048V160.335C32.0479 162.593 32.0479 163.722 32.7799 164.322C33.512 164.922 34.6188 164.7 36.8324 164.258L67.999 158.024C69.5383 157.717 70.3079 157.563 70.7613 157.01C71.2146 156.457 71.2146 155.672 71.2146 154.102V50.9939C71.2146 49.4241 71.2146 48.6392 71.6679 48.0863C72.1212 47.5333 72.8908 47.3794 74.4301 47.0715L144.763 33.0049C146.977 32.5621 148.084 32.3408 148.816 32.9409C149.548 33.541 149.548 34.6697 149.548 36.9272V71.2146M149.548 110.381V138.435C149.548 140.005 149.548 140.79 149.095 141.343C148.641 141.896 147.872 142.05 146.332 142.358L115.166 148.591C112.952 149.034 111.845 149.255 111.113 148.655C110.381 148.055 110.381 146.926 110.381 144.669V114.381C110.381 112.496 110.381 111.553 110.967 110.967C111.553 110.381 112.496 110.381 114.381 110.381H149.548ZM149.548 110.381V71.2146M149.548 71.2146L71.2146 86.8813" stroke="url(#paint4_linear_52_195)" strokeWidth="5"/>
          <Defs>
            <LinearGradient id="paint0_linear_52_195" x1="90.7979" y1="110.381" x2="90.7979" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint1_linear_52_195" x1="90.7979" y1="110.381" x2="90.7979" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint2_linear_52_195" x1="90.7979" y1="110.381" x2="90.7979" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint3_linear_52_195" x1="90.7979" y1="110.381" x2="90.7979" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint4_linear_52_195" x1="90.7979" y1="32.048" x2="90.7979" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
          </Defs>
        </Svg>

      </View>
    )
}

export function RightMusicIcon(){
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
    const stopSharedValue = useSharedValue({color:"#4AD1C9",offset:0});
    React.useEffect(()=>{
        stopSharedValue.value = withDelay(500,withRepeat(withTiming({color:"#4AD1C9",offset:1},{duration:2000}),0,true));
    },[])
    const stopAnimatedProps = useAnimatedProps(()=>({
        stopColor: stopSharedValue.value.color,
        offset: stopSharedValue.value.offset
    }));
    const {styles} = useStyles(styleSheet,{position:"right"});

    return(
      <View style={styles.music}>
        <Svg width="189" height="189" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/Svg">
          <Path d="M152.597 164.258L121.43 158.024C119.891 157.716 119.121 157.563 118.668 157.01C118.215 156.457 118.215 155.672 118.215 154.102V126.048L153.381 126.048C155.267 126.048 156.21 126.048 156.795 126.634C157.381 127.219 157.381 128.162 157.381 130.048V160.335C157.381 162.593 157.381 163.722 156.649 164.322C155.917 164.922 154.81 164.7 152.597 164.258Z" fill="url(#paint0_linear_52_198)"/>
          <Path d="M74.2635 148.591L43.0968 142.358C41.5575 142.05 40.7879 141.896 40.3346 141.343C39.8813 140.79 39.8813 140.005 39.8813 138.435V110.381L75.0479 110.381C76.9335 110.381 77.8764 110.381 78.4621 110.967C79.0479 111.553 79.0479 112.496 79.0479 114.381L79.0479 144.669C79.0479 146.926 79.0479 148.055 78.3159 148.655C77.5839 149.255 76.4771 149.034 74.2635 148.591Z" fill="url(#paint1_linear_52_198)"/>
          <Path d="M152.597 164.258L121.43 158.024C119.891 157.716 119.121 157.563 118.668 157.01C118.215 156.457 118.215 155.672 118.215 154.102V126.048L153.381 126.048C155.267 126.048 156.21 126.048 156.795 126.634C157.381 127.219 157.381 128.162 157.381 130.048V160.335C157.381 162.593 157.381 163.722 156.649 164.322C155.917 164.922 154.81 164.7 152.597 164.258Z" stroke="url(#paint2_linear_52_198)" strokeWidth="2"/>
          <Path d="M74.2635 148.591L43.0968 142.358C41.5575 142.05 40.7879 141.896 40.3346 141.343C39.8813 140.79 39.8813 140.005 39.8813 138.435V110.381L75.0479 110.381C76.9335 110.381 77.8764 110.381 78.4621 110.967C79.0479 111.553 79.0479 112.496 79.0479 114.381L79.0479 144.669C79.0479 146.926 79.0479 148.055 78.3159 148.655C77.5839 149.255 76.4771 149.034 74.2635 148.591Z" stroke="url(#paint3_linear_52_198)" strokeWidth="2"/>
          <Path d="M118.215 126.048L153.381 126.048C155.267 126.048 156.21 126.048 156.795 126.634C157.381 127.22 157.381 128.162 157.381 130.048V160.335C157.381 162.593 157.381 163.722 156.649 164.322C155.917 164.922 154.81 164.7 152.597 164.258L121.43 158.024C119.891 157.717 119.121 157.563 118.668 157.01C118.215 156.457 118.215 155.672 118.215 154.102L118.215 50.9939C118.215 49.4241 118.215 48.6392 117.761 48.0863C117.308 47.5333 116.538 47.3794 114.999 47.0715L44.6657 33.0049C42.4521 32.5621 41.3453 32.3408 40.6133 32.9409C39.8813 33.541 39.8813 34.6697 39.8813 36.9272L39.8813 71.2146M39.8813 110.381L39.8813 138.435C39.8813 140.005 39.8813 140.79 40.3346 141.343C40.7879 141.896 41.5575 142.05 43.0968 142.358L74.2634 148.591C76.4771 149.034 77.5839 149.255 78.3159 148.655C79.0479 148.055 79.0479 146.926 79.0479 144.669L79.0479 114.381C79.0479 112.496 79.0479 111.553 78.4621 110.967C77.8763 110.381 76.9335 110.381 75.0479 110.381L39.8813 110.381ZM39.8813 110.381V71.2146M39.8813 71.2146L118.215 86.8813" stroke="url(#paint4_linear_52_198)" strokeWidth="5"/>
          <Defs>
            <LinearGradient id="paint0_linear_52_198" x1="98.6313" y1="110.381" x2="98.6313" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint1_linear_52_198" x1="98.6313" y1="110.381" x2="98.6313" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint2_linear_52_198" x1="98.6313" y1="110.381" x2="98.6313" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint3_linear_52_198" x1="98.6313" y1="110.381" x2="98.6313" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
            <LinearGradient id="paint4_linear_52_198" x1="98.6313" y1="32.048" x2="98.6313" y2="165.215" gradientUnits="userSpaceOnUse">
              <AnimatedStop animatedProps={stopAnimatedProps}/>
              <Stop offset="1" stopColor="#266B67"/>
            </LinearGradient>
          </Defs>
        </Svg>

      </View>
    )
}


const styleSheet = createStyleSheet(()=>({
  music:{
    position: "absolute",
    variants:{
        position:{
            left: {
                top: -20,
                left: "-66%",
                transform: [{rotate: '-30deg'}]
            },
            right: {
                top: -20,
                right: "-66%",
                transform: [{rotate: '30deg'}]
            }
        }
    }
  }
}))