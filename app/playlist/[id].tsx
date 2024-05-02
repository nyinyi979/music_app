import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import PlaylistFlatList from "../../_components/playlist_components/playlists";

export default function (){
    // get lyrics, autoplay time, chords from database, then set it as state
    const {id} = useLocalSearchParams();
    const [playlistData, setPlaylistData] = React.useState<playlistData>({
        name: "Sample playlist",
        description: "A playlist to relax your eyes?",
        songs:[{
            id: "3",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "4",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "5",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "6",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "7",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "8",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "9",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "10",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "11",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },{
            id: "12",
            img_url: "/img/1",
            startChords: "ABC",
            artistName: "Artist Name",
            songName: "Song name",
        },],
        colors: ["#389F9A","#3FD8D1"]
    })
    return(
        <>
            <PlaylistFlatList description={playlistData.description} color={playlistData.colors} playlist={playlistData.songs}/>
            <Stack.Screen options={{title:playlistData.name}}/>
        </>
    )
}

interface playlistData{
    name: string,
    songs: {
        id: string,
        img_url: string,
        startChords: string, 
        artistName: string,
        songName: string
    }[],
    description: string,
    //two colors for gradient
    //first one lighter will be for each track background
    //second one darker will be used for texts
    //reverse for chords box
    colors: string[]
}