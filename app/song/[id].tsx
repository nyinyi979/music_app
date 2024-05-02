import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import LyricsFlatList from "../../_components/song_components/lyrics_chords";
import { DimensionValue } from "react-native";
export default function Song(){
    // get lyrics, autoplay time, chords from database, then set it as state
    const [songDetails, setSongDetails] = React.useState<Song>({
        name: "Song name",
        autoPlay: 2000,
        chords: [{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]},{chord: ["B","A"],offset:[30,30]},{chord: ["Am","Bm"],offset:[30,20]},{chord: ["B","A"],offset:[30,30]}],
        lyrics: ["Sample lyrics to be shown on the screen xdd","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go",,"Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go","Sample lyrics to be shown on the screen","Another example line, lets go",]
    });

    const changeChord = (chord: chord[]) =>{
        setSongDetails({...songDetails, chords: chord})
    };

    const [width, setWidth] = React.useState<DimensionValue>("0%");
    const longestArrayLength = React.useRef(
        songDetails.chords.length > songDetails.lyrics.length ? 
            songDetails.chords.length : songDetails.lyrics.length
    )
    const totalDuration = React.useRef(
        songDetails.autoPlay * longestArrayLength.current
    )
    const [play, setPlay] = React.useState(true);
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    let timer: NodeJS.Timeout;

    const incrementTimerAndIndex = () =>{
        if(play===true&&activeIndex<=songDetails.lyrics.length+1){
            setActiveIndex(activeIndex+1);
            setWidth(`${longestArrayLength.current/totalDuration.current*(8000*activeIndex)}%`);
        }
    }

    React.useEffect(()=>{
        timer = setInterval(()=>{
            incrementTimerAndIndex();
        },songDetails.autoPlay)
        if(activeIndex>songDetails.lyrics.length) {
            setPlay(false);
            setActiveIndex(0);
        }
        return ()=> window.clearTimeout(timer);
    })
    React.useEffect(()=>{
        play===false&&clearTimeout(timer);
    },[play])
    React.useEffect(()=>{
        setWidth(`${longestArrayLength.current/totalDuration.current*(8000*activeIndex)}%`);
    },[activeIndex])
    const {id} = useLocalSearchParams();
    return(
        <>
            <LyricsFlatList 
                setActiveIndex={setActiveIndex} 
                setWidth={setWidth}
                chords={songDetails.chords} 
                longestDuration={longestArrayLength.current}
                totalDuration={totalDuration.current}
                lyrics={songDetails.lyrics} 
                changeChord={changeChord}
                activeIndex={activeIndex}
                play={play}
                setPlay={setPlay}
                timer={timer}
                width={width}
            />
            <Stack.Screen options={{title:songDetails.name}}/>
        </>
    )
}


type chord = {
    chord: string[],
    offset: number[]
}
interface Song{
    name: string,
    lyrics: string[],
    autoPlay: number, //in milliseconds
    chords: chord[]
}