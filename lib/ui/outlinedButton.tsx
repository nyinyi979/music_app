import React from "react";
import { Pressable, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function OutlinedButton({
    title,onPress=()=>{},onHoverOut=()=>{},onPressOut=()=>{}
}:{title: string,onPress?: ()=>void, onHoverOut?: ()=>void, onHoverIn?: ()=>void, onPressOut?: ()=>void}){

    const [hover, setHover] = React.useState(false);
    const {styles} = useStyles(styleSheet,{state:hover? "hover":"normal"});
    
    const originalState = () =>{
        setHover(false);
    }

    const hoverState = () =>{
        setHover(true);
    }

    const pressState = () =>{
        setHover(true);
        onPress();
    }
    const hoverOutState = () =>{
        originalState();
        onHoverOut();
    }
    const pressOutState = ()=>{
        originalState();
        onPressOut();
    }
    return(
        <Pressable 
            onHoverIn={hoverState}
            onPress={pressState}
            onPressOut={pressOutState}
            onHoverOut={hoverOutState}
            style={styles.btn}
            >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    btn:{
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#4AD1C9",
        variants:{
            state:{
                hover:{
                    backgroundColor: "#4AD1C9",
                },
                normal:{
                    backgroundColor: "transparent"
                }
            }
        }
    },
    text:{
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily:"Inika-Bold"
    }
}))