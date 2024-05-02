import React, { Dispatch, SetStateAction } from "react";
import Animated from "react-native-reanimated";
import { DimensionValue, FlatList, Pressable, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Button from "../../lib/ui/button";
import TransposeChord from "./transpose_chords";
import ControlCenter from "./control_center";

interface LyricsFlatList {
    lyrics:string[],
    chords:chord[],
    changeChord:(chord: chord[])=>void,
    play: boolean,
    activeIndex: number,
    timer: NodeJS.Timeout,
    setPlay: Dispatch<SetStateAction<boolean>>,
    setActiveIndex: Dispatch<SetStateAction<number>>,
    longestDuration: number
    totalDuration: number,
    width: DimensionValue,
    setWidth: Dispatch<SetStateAction<DimensionValue>>
}

export default function LyricsFlatList(props: LyricsFlatList){
    const {styles} = useStyles(styleSheet);
    const {setActiveIndex,changeChord,chords,lyrics,play,activeIndex,timer,setPlay,longestDuration,setWidth,totalDuration,width} = props;

    // slice to copy the chords
    const newChords = React.useRef(chords.slice());
    const TransposeUpByHalf = () =>{
        for(var i=0; i<newChords.current.length; i++){
            for(var j=0; j<newChords.current[i].chord.length; j++){
                newChords.current[i].chord[j] = TransposeChord(newChords.current[i].chord[j])
            }
        };
        changeChord(newChords.current);
    }

    // Perform a loop to assign chords for first 3 chords displayed  
    const firstChords:string[] = [];
    for(var i=0; i<newChords.current.length; i++){
        if(firstChords.length > 3) break;
        for(var j=0; j<newChords.current[i].chord.length; j++){
            firstChords.push(newChords.current[i].chord[j])
        }
    }

    const flatList = React.useRef<FlatList>();

    React.useEffect(()=>{
        if(activeIndex>3) flatList.current.scrollToIndex({index:activeIndex-3})
    },[activeIndex])

    return(
        <View style={styles.container}>
            <View style={styles.lyricContainer}>
                <FlatList 
                    ref={flatList}
                    ListHeaderComponent={()=>(
                        <>
                            <LyricHeader transposePlus={TransposeUpByHalf} firstChords={firstChords}/>
                            <View style={styles.flatListHeader}>
                                <Text style={styles.flatListHeaderTxt}>LYRICS AND CHORDS</Text>
                            </View>
                        </>
                    )}
                    stickyHeaderHiddenOnScroll
                    scrollEnabled
                    showsVerticalScrollIndicator={false}
                    data={lyrics}
                    initialNumToRender={10}
                    onEndReached={()=>clearInterval(timer)}
                    renderItem={(info)=>(
                        <LyricChordText 
                          setActiveIndex={setActiveIndex}
                          index={info.index} 
                          activeIndex={activeIndex} 
                          chord={chords[info.index]&&chords[info.index]} 
                          lyrics={info.item}/>
                    )}
                />
            </View>
            <ControlCenter 
                play={play} 
                setPlay={setPlay} 
                longestDuration={longestDuration} 
                width={width} 
                setWidth={setWidth}
                totalDuration={totalDuration}
            />
        </View>
    )
}

function LyricChordText({lyrics, chord, index, activeIndex, setActiveIndex}:{lyrics:string,chord:chord|undefined,index:number,activeIndex:number,setActiveIndex:Dispatch<SetStateAction<number>>}){
    const {styles} = useStyles(styleSheet,{active: index<activeIndex});
    return(
        <Pressable 
          style={styles.txtContainer} 
          onPress={()=>{setActiveIndex(index+1)}}
          >
            <Animated.Text style={[styles.txt]}>
                {chord&&chord.chord.map((c,index)=>(
                    <Text key={c} style={{paddingLeft:`${chord.offset[index]}%`}}>{c}</Text>
                ))}
            </Animated.Text>
            <Animated.Text style={[styles.txt]}>{lyrics}</Animated.Text>
        </Pressable>
    )
}

function LyricHeader({transposePlus,firstChords}:{transposePlus:()=>void, firstChords: string[]}){
    const {styles} = useStyles(styleSheet);
    return(
        <View style={styles.chordControlCenterContainer}>
            <View style={styles.songImgContainer}>
                <View style={styles.songImg}/>
            </View>
            <View style={styles.chordControlCenter}>
                <View style={styles.transposeContainer}>
                    <View style={styles.transposeRow}> 
                        <Button variant="ghost" title="-" size="sm" rounded={false}/>
                        <Text style={styles.tranposeTxt}>Transpose</Text>
                        <Button variant="ghost" title="+" size="sm" rounded={false} onPress={transposePlus}/>
                    </View>
                </View>
                <Button title="Auto Scroll Lyrics" variant="ghost" block />
            </View>
            <View style={styles.chordContainer}>
                <Button variant="ghost" block style={{marginVertical:7}} size="md" asChild>
                    <Text style={styles.chordTxt} numberOfLines={1}>{firstChords.join("")}</Text>
                </Button>
                <Button title="0.5S" variant="ghost" block />
            </View>
        </View>
    )
}
const styleSheet = createStyleSheet((theme)=>({
    container:{
        flex:1,
        width:430,
        height:932,
        alignSelf:"center",
        padding:10,
        position:"relative",
        backgroundColor: theme.color.white
    },
    lyricContainer:{
        flex:.95
    },
    flatListHeader:{
        borderTopColor:theme.color.black,
        borderTopWidth:2,
        paddingVertical:5
    },
    flatListHeaderTxt:{
        textAlign:"center",
        fontSize:20,
        color: theme.color.black,
        fontFamily:"Inika-Bold"
    },
    chordControlCenterContainer:{
        flexDirection:"row",
        paddingHorizontal:10,
        paddingVertical:6
    },
    songImgContainer:{
        width:"30%"
    }, 
    chordControlCenter:{
        width:"45%"
    },
    songImg:{
        backgroundColor:theme.color.lightGray,
        width:80,
        height:80,
        alignSelf:"center"
    },
    transposeContainer:{
        marginVertical:5,
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor:theme.color.lightestGray,
        borderRadius:5
    },
    transposeRow:{
        flexDirection:"row",
        width:"100%"
    },
    tranposeTxt:{
        fontSize:16,
        width:"75%",
        textAlign:"center",
        color: theme.color.black,
        fontFamily:"Inika-Bold"
    },
    chordTxt:{
        fontSize: 16,
        color: theme.color.black,
        fontFamily:"Inika-Bold"
    },
    chordContainer:{
        width:"20%",
        marginHorizontal:10
    },
    txt:{
        fontSize: 18,
        fontFamily:"Inika-Bold",
        variants:{
            active:{
                true: {
                    color: theme.color.darkGray,
                    textShadowColor: theme.color.black,
                    textShadowOffset: {width:.5,height:.5},
                    textShadowRadius: .5
                },
                false:{
                    color: theme.color.notDarkGray
                },
            },
        }
    },
    txtContainer:{
        marginVertical: 4
    }
}))
export type chord = {
    chord: string[],
    offset: number[]
}