import React from "react";
import Animated, { useAnimatedProps, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { View, Text } from "react-native"
import { Defs, LinearGradient, Path, Svg, Stop } from "react-native-svg"
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function SaveLocally(){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.container}>
            <SaveLocallySVG />
            <SaveLocallyText />
        </View>
    )
}
export function TransportChords(){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.container}>
            <TransportSVG />
            <TransportText />
        </View>
    )
}

function SaveLocallySVG(){
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
    const AnimatedPath = Animated.createAnimatedComponent(Path);

	const stopSharedValue = useSharedValue({color:"#4AD1C9",offset:0});
    const pathSharedValue = useSharedValue(0);

	React.useEffect(()=>{
		stopSharedValue.value = withRepeat(withTiming({color:"#4AD1C9",offset:1},{duration:2000}),0,true);
		pathSharedValue.value = withRepeat(withTiming(14,{duration:1500}),0,true);
	},[])

	const stopAnimatedProps = useAnimatedProps(()=>({
		stopColor: stopSharedValue.value.color,
		offset: stopSharedValue.value.offset
	}));
    const pathAnimatedProps = useAnimatedProps(()=>({
        transform: [{translateY: pathSharedValue.value}]
    }))

    const {styles} =  useStyles(styleSheet);
    return(
        <View style={styles.svg}>
            <Svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M115.5 66H94.5704C94.0464 66 93.7844 66 93.5633 66.1183C93.3422 66.2367 93.1969 66.4546 92.9063 66.8906L83.0937 81.6094C82.8031 82.0454 82.6578 82.2633 82.4367 82.3817C82.2156 82.5 81.9536 82.5 81.4296 82.5H50.5704C50.0464 82.5 49.7844 82.5 49.5633 82.3817C49.3422 82.2633 49.1969 82.0454 48.9063 81.6094L39.0937 66.8906C38.8031 66.4546 38.6578 66.2367 38.4367 66.1183C38.2156 66 37.9536 66 37.4296 66H16.5" stroke="url(#paint0_linear_52_239)" strokeWidth="5"/>
                <Path d="M27.5 49.5L16.7929 60.2071C16.6054 60.3946 16.5 60.649 16.5 60.9142V102.5C16.5 103.605 17.3954 104.5 18.5 104.5H113.5C114.605 104.5 115.5 103.605 115.5 102.5V60.9142C115.5 60.649 115.395 60.3946 115.207 60.2071L104.5 49.5" stroke="url(#paint1_linear_52_239)" strokeWidth="5" strokeLinecap="round"/>
                <AnimatedPath animatedProps={pathAnimatedProps} d="M46.75 38.5L66 55M66 55L85.25 38.5M66 55L66 16.5" stroke="url(#paint2_linear_52_239)" strokeWidth="5"/>
                <Defs>
                    <LinearGradient id="paint0_linear_52_239" x1="66" y1="66" x2="66" y2="82.5" gradientUnits="userSpaceOnUse">
                        <AnimatedStop animatedProps={stopAnimatedProps} />
                        <Stop offset="1" stopColor="#266B67"/>
                    </LinearGradient>
                    <linearGradient id="paint1_linear_52_239" x1="66" y1="49.5" x2="66" y2="104.5" gradientUnits="userSpaceOnUse">
                        <AnimatedStop animatedProps={stopAnimatedProps} />
                        <Stop offset="1" stopColor="#266B67"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_52_239" x1="46.75" y1="35.75" x2="85.25" y2="35.75" gradientUnits="userSpaceOnUse">
                        <AnimatedStop animatedProps={stopAnimatedProps} />
                        <Stop offset="1" stopColor="#266B67"/>
                    </linearGradient>
                </Defs>
            </Svg>
        </View>
    )
}

function TransportSVG(){
    const AnimatedStop = Animated.createAnimatedComponent(Stop);
	const stopSharedValue = useSharedValue({color:"#37CAC1",offset:0});
	React.useEffect(()=>{
		stopSharedValue.value = withRepeat(withTiming({color:"#37CAC1",offset:1},{duration:2000}),0,true);
	},[])
	const stopAnimatedProps = useAnimatedProps(()=>({
		stopColor: stopSharedValue.value.color,
		offset: stopSharedValue.value.offset
	}));

    const {styles} =  useStyles(styleSheet);
    return(
        <View style={styles.svg}>
            <Svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fillRule="evenodd" clipRule="evenodd" d="M23.5 19.75C23.5 15.9788 23.5 14.0931 24.6716 12.9216C25.8431 11.75 27.7288 11.75 31.5 11.75H109.5C113.271 11.75 115.157 11.75 116.328 12.9216C117.5 14.0931 117.5 15.9788 117.5 19.75V32.75H108.25V17.625C108.25 16.2443 107.131 15.125 105.75 15.125C104.369 15.125 103.25 16.2443 103.25 17.625V32.75L88.125 32.75C86.7443 32.75 85.625 33.8693 85.625 35.25C85.625 36.6307 86.7443 37.75 88.125 37.75H103.25V52.875C103.25 54.2557 104.369 55.375 105.75 55.375C107.131 55.375 108.25 54.2557 108.25 52.875V37.75H117.5V121.25C117.5 125.021 117.5 126.907 116.328 128.078C115.157 129.25 113.271 129.25 109.5 129.25H31.5C27.7288 129.25 25.8431 129.25 24.6716 128.078C23.5 126.907 23.5 125.021 23.5 121.25V19.75ZM47 68.5C45.8954 68.5 45 69.3954 45 70.5C45 71.6046 45.8954 72.5 47 72.5L70.5 72.5C71.6046 72.5 72.5 71.6046 72.5 70.5C72.5 69.3954 71.6046 68.5 70.5 68.5L47 68.5ZM47 86.125C45.8954 86.125 45 87.0204 45 88.125C45 89.2296 45.8954 90.125 47 90.125H82.25C83.3546 90.125 84.25 89.2296 84.25 88.125C84.25 87.0204 83.3546 86.125 82.25 86.125H47ZM47 103.75C45.8954 103.75 45 104.645 45 105.75C45 106.855 45.8954 107.75 47 107.75H70.5C71.6046 107.75 72.5 106.855 72.5 105.75C72.5 104.645 71.6046 103.75 70.5 103.75H47Z" fill="url(#paint0_linear_52_245)"/>
                <Path d="M105.75 17.625L105.75 52.875" stroke="#67F9F0" strokeWidth="4" strokeLinecap="round"/>
                <Path d="M123.375 35.25L88.125 35.25" stroke="#67F9F0" strokeWidth="4" strokeLinecap="round"/>
                <Defs>
                    <LinearGradient id="paint0_linear_52_245" x1="70.5" y1="11.75" x2="70.5" y2="129.25" gradientUnits="userSpaceOnUse">
                        <AnimatedStop animatedProps={stopAnimatedProps}/>
                        <Stop offset="1" stopColor="#097069"/>
                    </LinearGradient>
                </Defs>
            </Svg>
        </View>
    )
}

function SaveLocallyText(){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.textContainer}>
            <Text style={styles.text}>Save Locally</Text>
            <Text style={styles.text}>IF YOU WANT</Text>
        </View>
    )
}

function TransportText(){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.textContainer}>
            <Text style={styles.text}>TRANSPORT</Text>
            <Text style={styles.text}>THE CHORDS</Text>
        </View>
    )
}
const styleSheet = createStyleSheet(()=>({
    container:{
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "96%",
        marginVertical: "5%"
    },
    svg:{
        alignSelf: "flex-start",
        paddingHorizontal: "3%"
    },
    textContainer:{
        alignSelf: "center",
        paddingHorizontal: "10%",
    },
    text:{
        fontFamily:"Inika-Regular",
        fontSize:24,
        textAlign:"center"
    }
}))