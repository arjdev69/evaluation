import AsyncStorage from '@react-native-community/async-storage';
import {Alert, Linking} from 'react-native';

export const openWebUrl = async (
  country: string,
  numberPhone: string,
  message: any,
) => {
  const url = `https://api.whatsapp.com/send?phone=${
    country + '' + '' + numberPhone
  }&text=${message}`;

  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export const removePost = async (number: any) => {
  try {
    const posts = await AsyncStorage.getItem('list');
    let postsFav = JSON.parse(posts);
    const postsItems = postsFav.filter(function (e: {number: any}) {
      return e.number !== number;
    });

    // updating 'posts' with the updated 'postsItems'
    await AsyncStorage.setItem('list', JSON.stringify(postsItems));
  } catch (error) {
    console.log('error: ', error);
  }
};

export const asyncFetch = async (_url: RequestInfo) => {
  fetch(_url)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => {
      console.error(error);
    });
};
