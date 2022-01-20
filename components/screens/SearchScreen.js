import React from "react"
import {View,StyleSheet} from 'react-native'
import Header from "../Header";
import TrackList from "../TrackList";
import Content from "../Content";
import LinearGradient from 'react-native-linear-gradient';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <LinearGradient colors={['#282828', '#121212' ]} style={{flex:0.5}}>
                <Content styling={styles}/>
            </LinearGradient>
            <TrackList styling={styles}/>
            
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    track: {
        color: 'white',
        fontSize: 15.5,
        paddingBottom: 5,
        fontFamily: "CircularStd-Book"
    }, 
    playsStyle: {
        color: '#919191', 
        fontSize: 13.5,
        fontFamily: "CircularStd-Book"
    }
})

export default SearchScreen;