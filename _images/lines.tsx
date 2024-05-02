import React from "react";
import { View } from "react-native"
import Animated, { useAnimatedProps, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg"
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function LeftLines(){
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
    const AnimatedPath = Animated.createAnimatedComponent(Path);
	
	const stopSharedValue = useSharedValue({color:"#4AD1C9",offset:0});
    const pathSharedValue1 = useSharedValue(0);
	const pathSharedValue2 = useSharedValue(0);
	const pathSharedValue3 = useSharedValue(0);

	React.useEffect(()=>{
		stopSharedValue.value = withRepeat(withTiming({color:"#4AD1C9",offset:1},{duration:2000}),0,true);
		pathSharedValue1.value = withRepeat(withTiming(20,{duration:1500}),0,true);
		pathSharedValue2.value = withDelay(750,withRepeat(withTiming(20,{duration:1500}),0,true));
		pathSharedValue3.value = withDelay(1500,withRepeat(withTiming(20,{duration:1500}),0,true));
	},[])

	const stopAnimatedProps = useAnimatedProps(()=>({
		stopColor: stopSharedValue.value.color,
		offset: stopSharedValue.value.offset
	}));
    const pathAnimatedProps1 = useAnimatedProps(()=>({
        transform: [{translateX: pathSharedValue1.value}]
    }));
    const pathAnimatedProps2 = useAnimatedProps(()=>({
        transform: [{translateX: pathSharedValue2.value}]
    }));
    const pathAnimatedProps3 = useAnimatedProps(()=>({
        transform: [{translateX: pathSharedValue3.value}]
    }));
		
	const {styles} = useStyles(styleSheet,{position:"left"});
    return(
        <View style={styles.lines}>
			<Svg width="263" height="310" viewBox="0 0 263 310" fill="none" xmlns="http://www.w3.org/2000/svg">
				<AnimatedPath animatedProps={pathAnimatedProps1} d="M-2.625 44.375H103.625" stroke="url(#paint0_linear_52_218)" strokeWidth="1.2" strokeLinecap="round"/>
				<AnimatedPath animatedProps={pathAnimatedProps2} d="M-2.625 115.208H103.625" stroke="url(#paint1_linear_52_218)" strokeWidth="1.2" strokeLinecap="round"/>
				<AnimatedPath animatedProps={pathAnimatedProps3} d="M-2.625 186.042H68.2083" stroke="url(#paint2_linear_52_218)" strokeWidth="1.2" strokeLinecap="round"/>
				<Defs>
					<LinearGradient id="paint0_linear_52_218" x1="50.5" y1="44.375" x2="50.5" y2="45.375" gradientUnits="userSpaceOnUse">
						<AnimatedStop animatedProps={stopAnimatedProps}/>
						<Stop offset="1" stopColor="#266B67"/>
					</LinearGradient>
					<LinearGradient id="paint1_linear_52_218" x1="50.5" y1="115.208" x2="50.5" y2="116.208" gradientUnits="userSpaceOnUse">
						<AnimatedStop animatedProps={stopAnimatedProps}/>
						<Stop offset="1" stopColor="#266B67"/>
					</LinearGradient>
					<LinearGradient id="paint2_linear_52_218" x1="32.7917" y1="186.042" x2="32.7917" y2="187.042" gradientUnits="userSpaceOnUse">
						<AnimatedStop animatedProps={stopAnimatedProps}/>
						<Stop offset="1" stopColor="#266B67"/>
					</LinearGradient>
				</Defs>
			</Svg>
        </View>
    )
}
export function RightLines(){
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
    const AnimatedPath = Animated.createAnimatedComponent(Path);
	
	const stopSharedValue = useSharedValue({color:"#4AD1C9",offset:0});
    const pathSharedValue1 = useSharedValue(0);
	const pathSharedValue2 = useSharedValue(0);
	const pathSharedValue3 = useSharedValue(0);

	React.useEffect(()=>{
		stopSharedValue.value = withRepeat(withTiming({color:"#4AD1C9",offset:1},{duration:2000}),0,true);
		pathSharedValue1.value = withRepeat(withTiming(-20,{duration:1500}),0,true);
		pathSharedValue2.value = withDelay(750,withRepeat(withTiming(-20,{duration:1500}),0,true));
		pathSharedValue3.value = withDelay(1500,withRepeat(withTiming(-20,{duration:1500}),0,true));
	},[])

	const stopAnimatedProps = useAnimatedProps(()=>({
		stopColor: stopSharedValue.value.color,
		offset: stopSharedValue.value.offset
	}));
    const pathAnimatedProps1 = useAnimatedProps(()=>({
        transform: [{translateX: pathSharedValue1.value}]
    }));
    const pathAnimatedProps2 = useAnimatedProps(()=>({
        transform: [{translateX: pathSharedValue2.value}]
    }));
    const pathAnimatedProps3 = useAnimatedProps(()=>({
        transform: [{translateX: pathSharedValue3.value}]
    }));
	
	const {styles} = useStyles(styleSheet,{position:"right"});
	return(
		<View style={styles.lines}>
			<Svg width="273" height="425" viewBox="0 0 273 425" fill="none" xmlns="http://www.w3.org/2000/svg">
				<AnimatedPath animatedProps={pathAnimatedProps3} d="M265.625 159.375H159.375" stroke="url(#paint0_linear_52_223)" strokeWidth="1.2" strokeLinecap="round"/>
				<AnimatedPath animatedProps={pathAnimatedProps2} d="M265.625 230.208H159.375" stroke="url(#paint1_linear_52_223)" strokeWidth="1.2" strokeLinecap="round"/>
				<AnimatedPath animatedProps={pathAnimatedProps1} d="M265.625 301.042H194.792" stroke="url(#paint2_linear_52_223)" strokeWidth="1.2" strokeLinecap="round"/>
				<Defs>
					<LinearGradient id="paint0_linear_52_223" x1="212.5" y1="159.375" x2="212.5" y2="160.375" gradientUnits="userSpaceOnUse">
						<AnimatedStop animatedProps={stopAnimatedProps} />
						<Stop offset="1" stopColor="#266B67"/>
					</LinearGradient>
					<LinearGradient id="paint1_linear_52_223" x1="212.5" y1="230.208" x2="212.5" y2="231.208" gradientUnits="userSpaceOnUse">
						<AnimatedStop animatedProps={stopAnimatedProps} />
						<Stop offset="1" stopColor="#266B67"/>
					</LinearGradient>
					<LinearGradient id="paint2_linear_52_223" x1="230.208" y1="301.042" x2="230.208" y2="302.042" gradientUnits="userSpaceOnUse">
						<AnimatedStop animatedProps={stopAnimatedProps} />
						<Stop offset="1" stopColor="#266B67"/>
					</LinearGradient>
				</Defs>
			</Svg>
		</View>
	)
}
const styleSheet = createStyleSheet((theme)=>({
		lines:{
			position: "absolute",
			variants:{
				position:{
					left:{
						left: 0,
						top: 0,
					},
					right:{
						right: -10,
						top: 0,
					}
				}
			}
		}
}))