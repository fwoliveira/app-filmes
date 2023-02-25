import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import SearchMovies from "../screens/SearchMovies";

const Stack = createStackNavigator();

export function AppRoutes(){

    return(
        <Stack.Navigator
         screenOptions={{
            headerShown:false,
        }}>
      <Stack.Screen   name="Home"  component={Home} />
      <Stack.Screen  name="SearchMovies" component={SearchMovies} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
        
    )
}