import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Track from "./Track";


const TrackList = ({styling}) => {
    
    const Tracks = ([
        {key: "1", title: "I'm Fine - IMANU remix", plays: '823,428', image: null},
        {key: "2", title: "I'm Fine", plays: '823,428', image: null },
        {key: "3", title: "3 Words (feat. Mick Jenkins)", plays: '823,428', image: null},
        {key: "4", title: "Okarina of Time", plays: '823,428', image: null},
        {key: "5", title: "Kosmo Shinobi (Intro)", plays: '823,428', image: null},
    ])

    const renderItem = ({item}) => {
        return (
            <Track item={item} styling={styling}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) =>index.toString()}
                data={Tracks}
                renderItem={renderItem}
                ListHeaderComponent={
                    <Text style={styles.listHeader}>Okudumile</Text>
                }
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,

    },
    listHeader: {
        color: 'white',
        fontSize: 18,
        margin: 10,
        // paddingBottom: 5,
        fontFamily: "CircularStd-Bold"

    }
})

export default TrackList