import { Link } from "expo-router";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import SettingSvg from "../../_images/setting";
import SearchSvg from "../../_images/search";

export function DefaultLine(){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.row}>
            <Text style={styles.defaultTxt}>DISCOVER</Text>
            <Link href={"/setting"}><SettingSvg /></Link>
        </View>
    )
}

export function SearchBar(){
    const {styles} = useStyles(styleSheet);
    return(
        <Link href={"/search"} style={[styles.row,styles.searchBar]}>
            <View style={{marginHorizontal: 10}}><SearchSvg /></View>
            <Text style={styles.searchBarTxt}>Search something new...</Text>
        </Link>  
    )
}
const styleSheet = createStyleSheet((theme)=>({
    row:{
        display: "flex",
        alignContent:"center",
        justifyContent:"center",
        alignSelf:"center",
        flexDirection:"row",
        width: "100%"
    },
    defaultTxt:{
        alignSelf:"flex-start",
        textAlign:"left",
        fontSize:20,
        fontWeight:"bold",
        width:"90%",
        color: theme.color.black,
        fontFamily: "Inika-Bold"
    },
    searchBar:{
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical:10,
        backgroundColor:"#4AD1C9",
        borderRadius:20
    },
    searchBarTxt:{
        color: "black",
        paddingVertical: 3,
        textAlign:"left",
        fontWeight:"bold",
        width:"90%",
        fontFamily: "Inika-Bold"
    }
}))