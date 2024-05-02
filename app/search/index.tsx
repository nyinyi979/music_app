import { ScrollView } from "react-native"
import NavigationBar from "../../_images/navigationBar"
import SearchInput from "../../_components/search_components/search_bar"
import RecentlySearched from "../../_components/search_components/recently_searched"
import RecentPlaylists from "../../_components/search_components/recentPlaylists"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function Search(){
    const {styles} = useStyles(styleSheet);
    return(
        <>
            <ScrollView style={styles.container}>
                <SearchInput />
                <RecentlySearched />
                <RecentPlaylists />
            </ScrollView>
            <NavigationBar active="Search"/>
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
        backgroundColor: theme.color.white
    }
}))