import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  label: {
    fontSize: 32,
    color: COLORS.primary,
    padding: 8,
    paddingLeft: 15,
  },
});
