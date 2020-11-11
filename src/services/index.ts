import axios from 'axios';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL:
    Platform.OS === 'ios'
      ? 'https://api.whatsapp.com'
      : 'https://api.whatsapp.com',
});

export default api;

//https://api.whatsapp.com/send? phone=55071996431175 & text=fala%20manoel
