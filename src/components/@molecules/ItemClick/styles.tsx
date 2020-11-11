import {lighten} from 'polished';
import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, SIZES, WP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.lightColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    width: WP('80%'),
    top: HP('10%'),
    borderRadius: SIZES.bdRadius,
  },
  boxListItem: {
    width: '100%',
    padding: 10,
    justifyContent: 'flex-start',
  },
  btn: {
    backgroundColor: lighten(0.1, COLORS.neutralLight),
    borderRadius: SIZES.bdRadius,
    justifyContent: 'flex-start',
    padding: 8,
  },
  labelBtn: {
    padding: 0,
    marginLeft: 40,
    flex: 0,
    textAlign: 'left',
  },
  iconBtn: {
    height: 32,
    width: 32,
  },
});
