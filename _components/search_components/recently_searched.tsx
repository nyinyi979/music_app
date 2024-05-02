import { FlatList, Pressable, Text, View } from "react-native";
import CloseIcon from "../../_images/close_icon";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import React from "react";

export default function RecentlySearched(){
    const {styles} = useStyles(styleSheet);

    // check on storage to set the initial state for this 
    const [cleared, setClear] = React.useState(false);
    const [recentArtistsAndSongs, setRecentArtistAndSongs] = React.useState([{
        name: "Artist",
        image: "/img_url",
        link: "/artist/a1"
    },{
        name: "Song",
        image: "/img_url",
        link: "/song/s1"
    }]);
    const clearAll = () =>{
        setRecentArtistAndSongs(new Array(5).fill({name:"",image:"",link:""}));
        setTimeout(()=>{setClear(true)},400)
    }
    return(
        <>
            {cleared ? <></>: 
            <View style={styles.container}>
                <Text style={styles.recentTxt}>Recently Searched</Text>
                <Pressable onPress={clearAll}><CloseIcon /></Pressable>
            </View>}
            <FlatList 
                horizontal
                data={recentArtistsAndSongs}
                renderItem={(info)=>(
                    <RecentItem name={info.item.name} img_url={info.item.link} link={info.item.link} />
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
            },300)
        } 
        else {
            fadeSharedValue.value = withSpring(1,{duration:600});
            setVisible(true);
        }
    },[name])
    const fadeAnimatedStyles = useAnimatedStyle(()=>({
        opacity: fadeSharedValue.value,
    }));
    return(
        <Animated.View style={[styles.songContainer,fadeAnimatedStyles,!visible&&{display:"none"}]}>
            {/* Here the actual image would be replaced */}
            <View style={styles.songBox}></View>
            <Text style={styles.songTxt}>{name}</Text>
        </Animated.View>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    container:{
        flexDirection:"row",
        marginVertical:10,
        paddingHorizontal:10
    },
    recentTxt:{
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
        flexDirection: "row",
        width: "97%",
        alignSelf: "center",
        marginVertical: 5,
    },
    songTxt:{
        width: "72%",
        fontSize: 16,
        paddingVertical: 12,
        color: theme.color.black,
        fontFamily:"Inika-Bold"
    },
    songBox:{
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#4AD1C9",
        marginHorizontal: 10,
    },
    closeIcon:{
        justifyContent:"center",
        alignItems:"center"
    }
}))