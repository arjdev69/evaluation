import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  box: {
    position: 'relative',
    height: HP('30%'),
    backgroundColor: COLORS.darkColor,
  },
  boxImage: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
  },
  boxImgSecondary: {
    position: 'absolute',
    backgroundColor: COLORS.lightColor,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -35,
    right: 30,
    height: '30%',
    width: '10%',
    borderRadius: 150,
    padding: 50,
    margin: 10,
    borderWidth: 0.2,
    borderColor: COLORS.transparentDarkColor,
  },
  imageSecondary: {
    height: 50,
    width: 50,
    borderRadius: 60,
    resizeMode: 'contain',
  },
});
