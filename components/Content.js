import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import LinearGradient from 'react-native-linear-gradient';

const Content = ({styling}) => {
    return (
        <View style={styles.container}>
            
            <View style={[styles.views, {paddingTop: 15}]}>
                <View style={styles.topTextView}>  
                    <Text style={[styling.playsStyle, {paddingBottom: 15}]}>Abaleli benyanga anbangu-166,307</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.buttonText}>OBALANDELAYO</Text>
                        <View style={styles.ellipsView}>
                            <Text style={styles.ellips}>...</Text>  
                        </View>
                        
                    </View>
                </View>
                <View style={styles.iconView}>
                    <View style={styles.playIconView}>
                        <Foundation name={'play'} color={'white'} size={33}/>
                    </View>
                    <View style={[styles.shuffleIconView, styles.icons]}>
                            <Entypo name={'shuffle'} color={'#52b27c'} size={10} />
                    </View>
                    
                </View>
                
            </View>

            <View style={[styles.views, {paddingTop:5}]}>
                <View style={styles.imageView}>
                    <ImageBackground style={styles.image} imageStyle={{borderRadius: 16}} source={require('../assets/images/highklassified.jpg')}>
                        <View style={[styles.heartIconView, styles.icons]}>
                            <Ionicons name={'heart'} color={'white'} size={13} />
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.textView}>
                    <Text style={styling.track}>Izingoma Ezithandiwe</Text>
                    <Text style={[styling.playsStyle, {fontSize: 12.7}]}>5 izingoma<Text style={{fontSize: 10}}> • </Text>High Klassified</Text>
                </View>

                <AntDesign name={'right'} color={'#808080'} size={20}/>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }, 
    views: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 0
    },
    topTextView: {
        flex: 2,
        
    },
    buttonText: {
        borderRadius: 4,
        fontSize: 10,
        color: 'white',
        paddingVertical: 7, 
        paddingHorizontal: 11,
        borderWidth: 1,
        borderColor: 'white',
        letterSpacing: 0.5,
        fontFamily: "CircularStd-Bold"
    },
    imageView: {
        flex: 0.2,
        paddingBottom: 5,
        marginLeft: 8,
        paddingRight: 3
    },
    image: {
        width: 32,
        height: 32,
        
    },
    textView: {
        flex: 1.2,
        
    },
    ellipsView: {
        flex:1, 
        marginLeft: 26
    },
    ellips: {
        color: '#bfbfbf',
        letterSpacing: 2.2,
        fontSize: 16,
        fontFamily: "CircularStd-Black"
    },
    iconView: {
        flex: 1, 
        alignItems: 'flex-end', 
        paddingBottom: 6,
        justifyContent: 'flex-end',
        marginRight: 5
        
    },
    playIconView: {
        paddingLeft: 4,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1bb956',
        width: 60,
        height: 60,
        borderRadius: 30,
        
    },
    icons: {
        paddingLeft:1,
        position: 'absolute',
        alignSelf:'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shuffleIconView: {
      
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 10
    },
    heartIconView: {
        bottom: -8,
        left: 17,
        
        backgroundColor: '#1bb956',
        width: 23,
        height: 23,
        borderRadius: 11.5,
        // borderColor: '#282828',
        borderWidth: 2,
    }
})

export default Content