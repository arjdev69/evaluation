import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  gridInfo: {
    backgroundColor: COLORS.lightColor,
    padding: 10,
    paddingBottom: 15,
    paddingLeft: 0,
    paddingRight: 0,
  },
  MapsView: {
    height: HP('20%'),
  },
  boxAddressInfo: {
    backgroundColor: COLORS.primary,
  },
});
