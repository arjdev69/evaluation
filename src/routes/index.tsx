import * as React from 'react';
import * as UI from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Products} from 'views';

import {COLORS, SIZES, HP} from 'styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListTasks">
        <Stack.Screen
          name="ListTasks"
          component={Home}
          options={{
            title: 'Evaluation',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: HP(SIZES.heightMenuMain),
            },
            headerTintColor: COLORS.lightColor,
            headerTitleStyle: {
              fontWeight: '100',
              fontSize: SIZES.titleMenu,
              letterSpacing: SIZES.titleMenuSpacing,
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name="DetailProduct"
          component={Products}
          options={{
            title: 'Rota',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: HP(SIZES.heightMenuMain),
            },
            headerTintColor: COLORS.lightColor,
            headerTitleStyle: {
              fontWeight: '100',
              fontSize: SIZES.titleMenu,
              letterSpacing: SIZES.titleMenuSpacing,
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name="Services"
          component={Products}
          options={{
            title: 'Rota',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: HP(SIZES.heightMenuMain),
            },
            headerTintColor: COLORS.lightColor,
            headerTitleStyle: {
              fontWeight: '100',
              fontSize: SIZES.titleMenu,
              letterSpacing: SIZES.titleMenuSpacing,
              textAlign: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
