import React from 'react'
import {View} from 'react-native'
import SearchScreen from './screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const home = 'IKhaya'
const search = 'Sesha'
const profile = 'Umtapo Wakho'

const Screens = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#1a1a1a' }} />
      );
}

const Tab = createBottomTabNavigator();

const MainContent = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator 
                initialRouteName = {search}
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        
                        if(route.name == home){
                            iconName = focused ? 'home' : 'home-outline'
                        } else if(route.name == search){
                            iconName = focused ? 'search': 'search-outline'
                        }else if(route.name == profile){
                            iconName = focused ? 'list' : 'list-outline'
                        }

                        return <Ionicons name={iconName} color={color} size={size}/>
                    },
                    tabBarStyle: {
                        backgroundColor: '#282828', 
                        borderTopColor: '#282828',
                    },
                    // tabBarLabelStyle: {
                    //     fontFamily: "CircularStd-Medium",
                    //     fontSize: 11
                    // },
                    tabBarActiveTintColor:'white',
                    inactiveTintColor: '#818181',
                    headerShown: false
                })} >

                <Tab.Screen name={home} component={Screens}/>            
                <Tab.Screen 
                    name={search} 
                    component={SearchScreen}
                    /> 
                <Tab.Screen name={profile} component={Screens}/> 

            </Tab.Navigator> 
        </NavigationContainer>
        
    );
};


export default MainContent;