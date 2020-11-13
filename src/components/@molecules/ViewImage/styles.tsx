import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  box: {
    height: HP('30%'),
    backgroundColor: COLORS.darkColor,
  },
  boxImage: {
    flex: 1,
  },
  image: {
    height: 32,
    width: WP('100%'),
  },
  imageSecondary: {
    height: 64,
    width: 64,
  },
});
