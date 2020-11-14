import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, SIZES, WP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.lightColor,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 10,
    width: WP('80%'),
    top: HP('20%'),
    borderRadius: SIZES.bdRadius,
  },
  labelBtn: {
    color: COLORS.primary,
    fontSize: 16,
    margin: 5,
  },
  title: {
    color: COLORS.primary,
    fontSize: 30,
  },
  description: {
    margin: 5,
    color: COLORS.transparentDarkColor,
  },
  btn: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    margin: 5,
    marginLeft: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryLight,
    borderWidth: 0.5,
    borderColor: COLORS.transparentDarkColor,
  },
});
