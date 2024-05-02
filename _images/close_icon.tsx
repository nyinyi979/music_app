import { Svg, Path } from "react-native-svg"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function CloseIcon(){
    const {styles} = useStyles(styleSheet);
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18 6L6 18" stroke={styles.close.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M6 6L18 18" stroke={styles.close.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    close:{
        color: theme.color.darkGray
    }
}))