import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FavorisProvider } from '../screens/FavorisContext';
import SearchPage from '../screens/SearchPage';
import FavorisPage from '../screens/FavorisPage';
import DetailPage from '../screens/DetailPage';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <FavorisProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              display: 'flex',
            },
          })}
        >
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
              tabBarLabel: 'Recherche',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Favoris"
            component={FavorisPage}
            options={{
              tabBarLabel: 'Favoris',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="star" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FavorisProvider>
  );
};


const SearchStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchPage}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        options={{ title: 'Détail du Film' }} 
      />
    </Stack.Navigator>
  );
};

export default App;
