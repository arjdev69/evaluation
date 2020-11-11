import * as React from 'react';
import * as UI from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {COLORS, SIZES, HP} from 'styles';

//import {styles} from './styles';

//import {MONEY} from 'utils/images';

import {Home} from 'views';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  function Detail() {
    return (
      <UI.View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <UI.Text>Home Screen 2</UI.Text>
      </UI.View>
    );
  }

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
          component={Detail}
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
          component={Detail}
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
