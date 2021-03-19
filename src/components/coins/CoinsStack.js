import React from 'react';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const coinsStack = () => {
   return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.blackPearl,
            shadowColor: Colors.blackPearl
        },
        headerTintColor: Colors.white
    }}>
        <Stack.Screen name="Coins" component={CoinsScreen}/>
        <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
   );
}

export default coinsStack;