import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  gridInfo: {
    backgroundColor: COLORS.lightColor,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  MapsView: {
    height: HP('20%'),
  },
  boxAddressInfo: {
    position: 'relative',
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  iconLocation: {
    position: 'absolute',
    top: -25,
    right: 15,
    backgroundColor: COLORS.lightColor,
    padding: 10,
    borderRadius: 40,
  },
  labelAddress: {
    color: COLORS.lightColor,
    padding: 5,
    right: WP('14%'),
  },
});
