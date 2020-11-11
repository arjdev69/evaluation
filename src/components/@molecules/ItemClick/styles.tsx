import {darken, lighten} from 'polished';
import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, SIZES, WP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  boxListItem: {
    width: WP('100%'),
    padding: 10,
    justifyContent: 'flex-start',
  },
  btn: {
    backgroundColor: lighten(0.1, COLORS.neutralLight),
    borderRadius: SIZES.bdRadius,
    justifyContent: 'flex-start',
    padding: 8,
    borderWidth: 0.5,
    borderColor: lighten(0.1, COLORS.darkColor),
  },
  labelBtn: {
    flex: 0,
    fontSize: 25,
    textAlign: 'center',
    color: COLORS.primary,
  },
  iconBtn: {
    height: 32,
    width: 32,
  },
});
