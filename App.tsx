/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';
import TicketPurchase from './TicketPurchase';
import News from './News';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}>
            {props => <Home {...props} username="NFL fan" />}
          </Stack.Screen>
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Roboto-Light'},
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Roboto-Light'},
              headerTitle: 'Contact Us',
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={TicketPurchase}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Roboto-Light'},
              headerTitle: ' Purchase Tickets',
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Roboto-Light'},
              headerTitle: ' Latest News',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
