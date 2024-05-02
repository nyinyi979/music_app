import { Link, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Links = [
    {        
        id: "1",            //this will used for routing
        name: "Song name",
        // photoURL: "#"    //this will be present in actual data source
    },
    {        
        id: "2",            //this will used for routing
        name: "Song name",
    },
    {        
        id: "3",            //this will used for routing
        name: "Song name",
    },
    {        
        id: "4",            //this will used for routing
        name: "Song name",
    },
    {        
        id: "5",            //this will used for routing
        name: "Song name",
    },
    {        
        id: "6",            //this will used for routing
        name: "Song name",
    },
    {        
        id: "7",            //this will used for routing
        name: "Song name",
    },
]

export default function RecentlyPlayed(){
    const {styles} = useStyles(styleSheet);
    return(
        <View>
            <Text style={styles.recentTxt}>Recently Played</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Links}
                renderItem={(info)=><SongItem id={info.item.id} name={info.item.name}/>}
            />
        </View>
    )
}
function SongItem({id, name}:{id:string, name:string}){
    const [hover, setHover] = React.useState(false);
    const {styles} = useStyles(styleSheet,{state:hover? "hover":"normal"});
    return(
        <Link href={`/song/${id}`} asChild>
            <View style={styles.songContainer}>
                <Pressable 
                android_ripple={{color:styles.song.backgroundColor,radius:10}}
                onHoverIn={()=>setHover(true)} 
                onHoverOut={()=>setHover(false)}>
                    <View style={styles.song} />
                    <Text style={styles.songTxt}>{name}</Text>
                </Pressable>
            </View>
        </Link>
    )
}
const styleSheet = createStyleSheet((theme)=>({
    recentTxt:{
        color: "#36C1DB",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        fontFamily:"Inika-Bold"
    },
    song: {
        width:90,
        height:100,
        backgroundColor:"#4AD1C9",
        borderRadius:10,
        shadowColor: theme.color.notDarkGray,
        shadowOpacity:.2,
        variants:{
            state:{
                hover:{
                    elevation: 7,
                    shadowOffset:{width: 3, height: 3},
                    shadowRadius: 7
                },
                normal:{
                    elevation: 5,
                    shadowOffset:{width: 2, height: 2},
                    shadowRadius: 5
                }
            }
        }
    },
    songTxt:{
        textAlign:"center",
        marginVertical:10,
        fontSize:12,
        fontWeight:'bold',
        color: theme.color.black,
        fontFamily:"Inika-Regular"
    },
    songContainer:{
        display: "flex",
        flexDirection: "column",
        alignSelf:"flex-start",
        marginRight:20,
        borderRadius:10
    }
}))