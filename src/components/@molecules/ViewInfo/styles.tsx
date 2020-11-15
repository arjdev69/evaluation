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
  grid: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryLight,
  },
  gridComment: {
    borderBottomWidth: 0,
  },
  btn: {
    flex: 1,
    padding: '1.6%',
    margin: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: HP('1.5%'),
    letterSpacing: 1,
    marginTop: 5,
  },
  description: {
    fontWeight: 'normal',
    fontSize: HP('2%'),
    letterSpacing: 1,
    textAlign: 'justify',
  },
});
