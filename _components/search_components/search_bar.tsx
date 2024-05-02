import React from "react";
import { TextInput, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import SearchSvg from "../../_images/search";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function SearchInput(){
    const [focus, setFocus] = React.useState(false);
    const {styles} = useStyles(styleSheet,{focus});
    const viewSharedValue = useSharedValue({translateY:-20,opacity:0});
    const viewAnimatedStyle = useAnimatedStyle(()=>({
        transform: [{translateY: viewSharedValue.value.translateY}],
        opacity: viewSharedValue.value.opacity
    }))
    const [sValue, setSValue] = React.useState("");
    React.useEffect(()=>{
        viewSharedValue.value = withSpring({translateY:0,opacity:1})
    },[])
    return(
        <Animated.View style={viewAnimatedStyle}>
            <TextInput 
                style={styles.searchBar} 
                inlineImageLeft=""
                onFocus={()=>setFocus(true)}
                onBlur={()=>setFocus(false)}
                placeholder="Search something new..."
                value={sValue}
                onChangeText={(e)=>setSValue(e)}
                keyboardType="default" />
            <View style={styles.svg}><SearchSvg /></View>
        </Animated.View>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    searchBar: {
        width: "99%",
        position:"relative",
        alignSelf:"center",
        height: 20,
        outlineStyle: "none",
        backgroundColor: "#4AD1C9",
        paddingVertical: 15,
        paddingRight: 10,
        paddingLeft: 30,
        borderRadius: 5,
        shadowColor:theme.color.darkGray,
        shadowOpacity:.2,
        elevation: 5,
        shadowOffset:{width: 5, height: 5},
        shadowRadius: 5,
        fontFamily:"Inika-Bold",
        variants:{
            focus:{
                true:{
                    borderWidth: 1,
                    borderColor: theme.color.black
                },
                false:{
                    borderWidth: 1,
                    borderColor: "transparent"
                }
            }
        }
    },
    svg:{
        position:"absolute",
        left:10,
        top:5
    }
}))