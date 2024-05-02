import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Links = [
    {        
        id: "1",            //this will used for routing
        name: "Artist name",
        // photoURL: "#"    //this will be present in actual data source
    },
    {        
        id: "2",            //this will used for routing
        name: "Artist name",
    },
    {        
        id: "3",            //this will used for routing
        name: "Artist name",
    },
    {        
        id: "4",            //this will used for routing
        name: "Artist name",
    },
    {        
        id: "5",            //this will used for routing
        name: "Artist name",
    },
    {        
        id: "6",            //this will used for routing
        name: "Artist name",
    },
]

export default function Artists(){
    const {styles} = useStyles(styleSheet);
    return(
        <View>
            <Text style={styles.Txt}>Artists</Text>
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                {Links.map((l)=>(
                    <ArtistItem id={l.id} name={l.name} key={l.id}/>
                ))}
            </View>
        </View>
    )
}
function ArtistItem({id, name}:{id:string, name:string}){
    const [hover, setHover] = React.useState(false);
    const {styles} = useStyles(styleSheet,{state:hover? "hover":"normal"});
    return(
        <Link href={`/playlist/${id}`} asChild>
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
    Txt:{
        color: "#36C1DB",
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        fontFamily:"Inika-Bold"
    },
    song: {
        width:120,
        height:120,
        backgroundColor:"#4AD1C9",
        borderRadius:100,
        shadowColor:theme.color.notDarkGray,
        shadowOpacity:.4,
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
        fontFamily:"Inika-Bold"
    },
    songContainer:{
        alignSelf:"flex-start",
        marginRight:14
    }
}))