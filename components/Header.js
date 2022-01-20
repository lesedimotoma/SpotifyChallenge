import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'


const Header = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/highklassified.jpg')}>
                <View style={styles.iconView}>
                    <Entypo name='chevron-thin-left' color='white' size={20} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>High Klassified</Text>
                </View> 
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1.3,
        overflow: 'hidden',
        // width: 500,
        // height: 500,
        
        
    },

    image: {
        // width: 1400,
        height: 790,
        flexBasis: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    
    },
    textView: {
        position: 'absolute',
        paddingLeft: 13,
    },
    text: {
        color: 'white',
        fontSize: 54,
        fontFamily: "CircularStd-Black",
        letterSpacing: -1.3
    },
    iconView: {
        opacity: 0.3,
        backgroundColor: 'black',
        borderRadius: 24,
        margin: 15,
        marginTop: 30,
        padding: 8,
        alignSelf: 'flex-start'
        
    }
})

export default Header;