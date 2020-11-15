import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  box: {
    width: '100%',
    padding: 10,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightColor,
    borderBottomColor: COLORS.transparentDarkColor,
    borderBottomWidth: 0.9,
  },
  boxTexts: {
    flex: 1,
    top: 20,
    marginLeft: 5,
    padding: 5,
  },
  boxTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxStars: {
    flexDirection: 'row',
  },
  image: {
    margin: 5,
    height: 64,
    width: 64,
    borderRadius: 64,
  },
  name: {
    color: COLORS.primary,
    fontSize: 14,
  },
  title: {
    color: COLORS.primary,
    fontSize: 14,
    textTransform: 'uppercase',
    paddingBottom: 5,
    paddingTop: 5,
  },
  comment: {
    color: COLORS.primary,
    fontSize: 14,
  },
});
