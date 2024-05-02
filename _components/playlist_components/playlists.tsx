import Color from "color";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type playlist = {
    id: string,
    img_url: string,
    startChords: string, 
    artistName: string,
    songName: string,
}
type eachPlaylist = {
    id: string,
    img_url: string,
    startChords: string, 
    artistName: string,
    songName: string,
    color: string[],
    lightestColor: string,
    lighterColor: string,
    darkerColor: string,
    darkestColor: string,
}
export default function PlaylistFlatList(props: {playlist: playlist[],color:string[],description:string}){
    const darkerColor = React.useRef(Color(props.color[0]).darken(.4).toString());
    const darkestColor = React.useRef(Color(props.color[0]).darken(.9).toString());
    const lighterColor= React.useRef(Color(props.color[0]).lighten(.4).toString());
    const lightestColor = React.useRef(Color(props.color[0]).lighten(1).toString());
    const {styles} = useStyles(styleSheet);
    return(
        <LinearGradient colors={props.color} style={styles.songContainer}>
            <FlatList 
                data={props.playlist}
                showsHorizontalScrollIndicator={false}
                style={{paddingHorizontal:10}}
                ListHeaderComponent={()=><Text style={styles.headerTxt(lightestColor.current,darkerColor.current)}>{props.description}</Text>}
                renderItem={(info)=>
                    <EachSong 
                      artistName={info.item.artistName}
                      id={info.item.id}
                      img_url={info.item.img_url}
                      songName={info.item.songName}
                      startChords={info.item.startChords}
                      color={props.color}
                      lighterColor={lighterColor.current}
                      darkerColor={darkerColor.current}
                      lightestColor={lightestColor.current}
                      darkestColor={darkestColor.current}
                    />
                }
            />
        </LinearGradient>
    )
}

function EachSong(playlist: eachPlaylist){
    const {artistName,color,id,img_url,songName,startChords,darkerColor,lighterColor,lightestColor,darkestColor} = playlist;
    const [pressed, setPressed] = React.useState(false);
    const {styles} = useStyles(styleSheet);
    return(
        <Link asChild href={`/song/${id}`}>
            <Pressable
                onPressIn={()=>setPressed(true)} onPressOut={()=>setPressed(false)} 
                style={{...styles.eachSongContainer,backgroundColor: pressed? lightestColor : lighterColor}}>
                <View style={styles.img(darkerColor)}/>
                <View style={styles.songTxtContainer}>
                    <Text style={styles.songTxt(darkestColor)}>{songName}</Text>
                    <Text style={styles.songTxt(darkestColor)}>{artistName}</Text>
                </View>
                <View>
                    <View style={styles.chordContainer(darkerColor)}>
                        <Text style={styles.chordColor(lightestColor)} numberOfLines={1}>{startChords}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

const styleSheet = createStyleSheet((theme)=>({
    songContainer:{
        flex:1,
        width:"100%",
        height:"100%",
        alignSelf:"center",
        padding:10,
        position:"relative"
    },
    eachSongContainer:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:"100%",
        padding:5,
        marginVertical:6,
        borderRadius:5
    },
    headerTxt:(lightestColor,darkerColor)=>({
        color:lightestColor,
        fontSize:18,
        paddingVertical:10,
        borderBottomColor:darkerColor,
        borderBottomWidth:1,
        marginBottom:10,
        fontFamily:"Inika-Regular"
    }),
    img:(darkerColor)=>({
        width:50,
        height:50,
        backgroundColor:darkerColor
    }),
    songTxtContainer:{
        marginHorizontal:20,
        width:"50%"
    },
    songTxt:(darkestColor)=>({
        color:darkestColor,
        fontSize:16,
        paddingVertical:3,
        fontFamily:"Inika-Regular"
    }),
    chordContainer:(darkerColor)=>({
        backgroundColor:darkerColor,
        alignSelf:"center",
        padding:5,
        borderRadius:5
    }),
    chordColor:(lightestColor)=>({
        color: lightestColor,
        fontFamily:"Inika-Regular"
    })
}))