import React, { Component } from 'react';
import SearchBraids from './SearchBraids';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import BraidInfo from './BraidInfoComponent';
import Constants from 'expo-constants';


const BraidNavigator = createStackNavigator(
    {
        SearchBraids: { screen: SearchBraids },
        BraidInfo: { screen: BraidInfo }
    },
    {
        initialRouteName: 'SearchBraids',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#AC7D88'
            },
            headerTintColor: '#F8ECD1',
            headerTitleStyle: {
                color: '#F8ECD1'
            }
        }
    }
);

const AppNavigator= createAppContainer(BraidNavigator);

class Main extends Component {
    render() {
        return (
            <View 
                style={{
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        )
    }
}

export default Main;