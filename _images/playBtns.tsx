import React from "react";
import { Path, Svg } from "react-native-svg"
import { createStyleSheet, useStyles } from "react-native-unistyles";

function ToPause(){
    const {styles} = useStyles(styleSheet);
    return(
        <>
            <Path d="M26.5 13C26.5 12.0572 26.5 11.5858 26.7929 11.2929C27.0858 11 27.5572 11 28.5 11H29.5C30.4428 11 30.9142 11 31.2071 11.2929C31.5 11.5858 31.5 12.0572 31.5 13V37C31.5 37.9428 31.5 38.4142 31.2071 38.7071C30.9142 39 30.4428 39 29.5 39H28.5C27.5572 39 27.0858 39 26.7929 38.7071C26.5 38.4142 26.5 37.9428 26.5 37V13Z" fill={styles.close.color} fillOpacity="1" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round"/>
            <Path d="M18 13C18 12.0572 18 11.5858 18.2929 11.2929C18.5858 11 19.0572 11 20 11H21C21.9428 11 22.4142 11 22.7071 11.2929C23 11.5858 23 12.0572 23 13V36.8409C23 37.7837 23 38.2551 22.7071 38.548C22.4142 38.8409 21.9428 38.8409 21 38.8409H20C19.0572 38.8409 18.5858 38.8409 18.2929 38.548C18 38.2551 18 37.7837 18 36.8409V13Z" fill={styles.close.color} fillOpacity="1" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round"/>
        </>
    )
}
export function ToPlay(){
    const {styles} = useStyles(styleSheet);
    return(
        <>
            <Path d="M16 14.3054C16 12.8278 16 12.089 16.4823 11.7971C16.9646 11.5053 17.6191 11.8481 18.928 12.5337L36.8185 21.9049C38.1732 22.6145 38.8505 22.9693 38.8761 23.5439C38.9016 24.1185 38.2584 24.5319 36.972 25.3589L19.0815 36.8599C17.7216 37.7342 17.0416 38.1713 16.5208 37.887C16 37.6026 16 36.7943 16 35.1776V14.3054Z" fill={styles.close.color} fillOpacity="1" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round"/>
            <Path d="M16 14.3054C16 12.8278 16 12.089 16.4823 11.7971C16.9646 11.5053 17.6191 11.8481 18.928 12.5337L36.8185 21.9049C38.1732 22.6145 38.8505 22.9693 38.8761 23.5439C38.9016 24.1185 38.2584 24.5319 36.972 25.3589L19.0815 36.8599C17.7216 37.7342 17.0416 38.1713 16.5208 37.887C16 37.6026 16 36.7943 16 35.1776V14.3054Z" fill={styles.close.color} fillOpacity="1" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round"/>
        </>
    )
}
export function PlayAndPause({play}:{play: boolean}){
    const {styles} = useStyles(styleSheet);
    return(
        <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/Svg">
            {play? <ToPause /> : <ToPlay />}
        </Svg>
    )
}
export function Next(){
    const {styles} = useStyles(styleSheet);
    return(
        <Svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M26.8539 24.0587L10.2716 14.8463C10.005 14.6982 9.67737 14.891 9.67737 15.1959V34.6697C9.67737 34.9747 10.005 35.1675 10.2716 35.0193L26.8539 25.807C27.5397 25.426 27.5397 24.4397 26.8539 24.0587Z" fill={styles.close.color} fillOpacity="0.4" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M33.871 35.4166L33.871 14.5833" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round"/>
        </Svg>
    )
}

export function Prev(){
    const {styles} = useStyles(styleSheet)
    return(
        <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M23.1461 24.0587L39.7284 14.8463C39.995 14.6982 40.3226 14.891 40.3226 15.1959V34.6697C40.3226 34.9747 39.995 35.1675 39.7284 35.0193L23.1461 25.807C22.4603 25.426 22.4603 24.4397 23.1461 24.0587Z" fill={styles.close.color} fillOpacity="0.4" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M16.129 35.4166L16.129 14.5833" stroke={styles.close.color} strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
    )
}


const styleSheet = createStyleSheet((theme)=>({
    close:{
        color: theme.color.darkGray
    }
}))