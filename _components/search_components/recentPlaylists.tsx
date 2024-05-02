import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import CloseIcon from "../../_images/close_icon";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Link } from "expo-router";

export default function RecentPlaylists(){
    // Get from local storage to get the recent searches
    const [cleared, setClear] = React.useState(false);
    const [recentArtistsAndSongs, setRecentArtistAndSongs] = React.useState([{
        name: "Playlist",
        image: "/img_url",
        link: "/playlist/p1"
    },{
        name: "Playlist",
        image: "/img_url",
        link: "/playlist/p2"
    },{
        name: "Playlist",
        image: "/img_url",
        link: "/playlist/p2"
    },{
        name: "Playlist",
        image: "/img_url",
        link: "/playlist/p2"
    },{
        name: "Playlist",
        image: "/img_url",
        link: "/playlist/p2"
    }]);
    const clearAll = () =>{
        setRecentArtistAndSongs(new Array(5).fill({name:"",image:"",link:""}));
        setTimeout(()=>{setClear(true)},500)
    }
    const {styles} = useStyles(styleSheet);
    return(
        <>
            {cleared? <></>:
            <View style={styles.container}>
                <Text style={styles.recetTxt}>Recently Searched</Text>
                {recentArtistsAndSongs.length>=0&&<Pressable onPress={clearAll}><CloseIcon /></Pressable>}
            </View>}
            <FlatList 
                horizontal
                data={recentArtistsAndSongs}
                renderItem={(info)=>(
                    <RecentItem name={info.item.name} img_url={info.item.link} link={info.item.link}/>
                )}
                style={styles.songFlatList}
            />
        </>
    )
}
function RecentItem({name,img_url,link}:{name: string, img_url: string, link: string}){
    const {styles} = useStyles(styleSheet);
    const fadeSharedValue = useSharedValue(0);
    const [visible, setVisible] = React.useState(true);
    React.useEffect(()=>{
        if(name=="") {
            fadeSharedValue.value = withSpring(0,{duration:600})
            setTimeout(()=>{
                setVisible(false);
            },600)
        } 
        else {
            fadeSharedValue.value = withSpring(1,{duration:600});
            setVisible(true);
        }
    },[name])
    const fadeAnimatedStyles = useAnimatedStyle(()=>({
        opacity: fadeSharedValue.value,
        transform: [{scale: fadeSharedValue.value}]
    }));
    return(
        <Link href={link}>
            <Animated.View style={[styles.songContainer,!visible&&{display:"none"},fadeAnimatedStyles]}>
                {/* Here the actual image would be replaced */}
                <View style={styles.songBox}></View>
                <Text style={styles.songTxt}>{name}</Text>
            </Animated.View>
        </Link>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    container:{
        flexDirection:"row",
        marginVertical:10,
        paddingHorizontal:10
    },
    recetTxt:{
        fontSize:24,
        fontWeight:"bold",
        width:"90%",
        color: theme.color.black,
        fontFamily:"Inika-Bold"
    },
    songFlatList:{
        padding: 5
    },
    songContainer:{
        width: "97%",
        alignSelf: "center",
        marginVertical: 5,
    },
    songTxt:{
        width: "100%",
        fontSize: 14,
        textAlign: "center",
        paddingVertical: 12,
        color: theme.color.black,
        fontFamily:"Inika-Bold"
    },
    songBox:{
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: "#4AD1C9",
        marginHorizontal: 10,
    },
    closeIcon:{
        justifyContent:"center",
        alignItems:"center"
    }
}))