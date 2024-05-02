import { ScrollView } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function Search(){
    const {styles} = useStyles(styleSheet);
    return(
        <>
            <ScrollView style={styles.container}>
                
            </ScrollView>
        </>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    container:{
        width:430,
        height:932,
        alignSelf:"center",
        padding:10,
        position:"relative",
    }
}))