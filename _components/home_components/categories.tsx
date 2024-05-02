import { FlatList, Pressable, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {LinearGradient} from "expo-linear-gradient"
import { Link } from "expo-router";
import React from "react";
const Links = [
    {        
        id: "1",            //this will used for routing
        name: "Category name",
        gradientColor: ["#DC6565","#7B2929"]
    },
    {        
        id: "2",            //this will used for routing
        name: "Category name",
        gradientColor: ["#62D6B4","#41917E"]
    },
    {        
        id: "3",            //this will used for routing
        name: "Category name",
        gradientColor: ["#6193CF","#3C6692"]
    },
    
    {        
        id: "4",            //this will used for routing
        name: "Category name",
        gradientColor: ["#DC6565","#7B2929"]
    },
    {        
        id: "5",            //this will used for routing
        name: "Category name",
        gradientColor: ["#62D6B4","#41917E"]
    },
    {        
        id: "6",            //this will used for routing
        name: "Category name",
        gradientColor: ["#6193CF","#3C6692"]
    },
]

export default function DiscoverCategories(){
    const {styles} = useStyles(styleSheet);
    return(
        <View>
            <Text style={styles.recentTxt}>Discover the categories!</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Links}
                renderItem={(info)=><CategoryItem id={info.item.id} name={info.item.name} colors={info.item.gradientColor}/>}
            />
        </View>
    )
}
function CategoryItem({id, name,colors}:{id:string, name:string,colors:string[]}){
    const [hover, setHover] = React.useState(false);
    const {styles} = useStyles(styleSheet,{state:hover? "hover":"normal"});
    return(
        <Link href={`/playlist/${id}`} asChild>
            <LinearGradient colors={colors} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.category}>
                <Pressable
                android_ripple={{color:colors[0],radius:10}}
                onHoverIn={()=>setHover(true)} 
                onHoverOut={()=>setHover(false)}>
                    <Text style={styles.categoryTxt}>{name}</Text>
                </Pressable>
            </LinearGradient>
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
    category: {
        width:150,
        height:120,
        borderRadius:10,
        shadowColor:theme.color.notDarkGray,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        marginRight: 20,
        shadowOpacity: .2,
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
    categoryTxt:{
        textAlign:"center",
        marginVertical:10,
        fontSize:12,
        fontWeight:"bold",
        color:"white",
        fontFamily:"Inika-Bold"
    }
}))