import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Track = ({item, styling}) => {
    return (
        <View style={styles.container}>
            <View style={styles.keyView}>
                <Text style={[styling.track, styles.key]}>{item.key}</Text>
            </View>
            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../assets/images/album_cover.png')}/>
            </View>
            <View style={styles.titleView}>
                <Text style={styling.track}>{item.title}</Text>
                <Text style={styling.playsStyle}>{item.plays}</Text>
            </View>
            <Text style={[styling.playsStyle, styles.ellips]}>...</Text>
            
        </View>
)
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
        
    },
    titleView: {
        flex: 1,
        paddingLeft: 6
        
    },
    keyView: {
        flex: 0,
        justifyContent: 'center',
        marginRight: 16
        // alignItems: 'center'

    },
    imageView: {
        flex: 0.2,
        
    },
    image: {
        width: 47,
        height: 47,
        
    },
    ellips: {
        letterSpacing:2, 
        fontFamily: "CircularStd-Black"
    },
    key: {
        fontSize: 13,
    }
    
})

export default Track