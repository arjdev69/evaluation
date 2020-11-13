import * as React from 'react';

import * as UI from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

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
            cardStyle: {
              backgroundColor: COLORS.neutralLight,
            },
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
          options={({navigation}) => ({
            cardStyle: {
              backgroundColor: COLORS.neutralLight,
            },
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: HP(SIZES.heightMenuMain),
            },
            headerTintColor: COLORS.lightColor,
            headerTitleStyle: {
              fontWeight: '100',
              fontSize: HP('2%'),
              letterSpacing: 0.5,
              textAlign: 'center',
            },
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.navigate('ListTasks');
                }}
                backImage={() => (
                  <Icon
                    name="md-caret-back-sharp"
                    size={20}
                    color={COLORS.lightColor}
                  />
                )}
              />
            ),
            headerRight: () => (
              <UI.View style={{padding: 10}}>
                <Icon
                  name="ios-search-outline"
                  size={20}
                  color={COLORS.lightColor}
                />
              </UI.View>
            ),
          })}
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
