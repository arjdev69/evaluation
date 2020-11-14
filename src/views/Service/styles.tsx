import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  box: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    color: COLORS.lightColor,
    fontSize: 34,
    letterSpacing: 10,
  },
});
