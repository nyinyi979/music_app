import RecentlyPlayed from "../../_components/home_components/recentlyPlayed";
import DiscoverCategories from "../../_components/home_components/categories";
import Artists from "../../_components/home_components/artists";
import NavigationBar from "../../_images/navigationBar";
import { ScrollView } from "react-native";
import { DefaultLine, SearchBar } from "../../_components/home_components/header";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useFonts } from "expo-font";
export default function Home(){
    const {styles} = useStyles(styleSheet);
    return(
        <>
            <ScrollView
                style={styles.scrollView}>
                <DefaultLine />
                <SearchBar />
                <RecentlyPlayed />
                <DiscoverCategories />
                <Artists /> 
            </ScrollView>
            <NavigationBar active="Home"/>
        </>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    scrollView:{
        width:430,
        height:932,
        alignSelf:"center",
        paddingHorizontal:10,
        paddingTop:10,
        paddingBottom:50,
        position:"relative",
        backgroundColor: theme.color.white
    }
}))