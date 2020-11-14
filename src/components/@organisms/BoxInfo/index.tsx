import React from 'react';

import {openWebUrl} from 'utils';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFw from 'react-native-vector-icons/FontAwesome';

import {ViewInfo} from 'components/@molecules';

import {COLORS} from 'styles';

export interface Props {
  data: any;
}

const BoxInfo: React.FC<Props> = (_props) => {
  const route = useNavigation();
  const buttons = [
    {
      icon: <Icon name="ios-call" size={24} color={COLORS.primary} />,
      label: 'Ligar',
      press: () => {
        openWebUrl(`tel:${_props.data.phone}`);
      },
    },
    {
      icon: <IconFw name="diamond" size={24} color={COLORS.primary} />,
      label: 'Serviços',
      press: () => {
        route.navigate('Services');
      },
    },
    {
      icon: <Icon name="location" size={24} color={COLORS.primary} />,
      label: 'Endereço',
      press: () => {
        console.log('press Endereço');
      },
    },
    {
      icon: <IconFw name="comments" size={24} color={COLORS.primary} />,
      label: 'Comentários',
      press: () => {
        console.log('press Comentários');
      },
    },
    {
      icon: <Icon name="star" size={24} color={COLORS.primary} />,
      label: 'Favoritos',
      press: () => {
        console.log('press Favoritos');
      },
    },
  ];

  return (
    <ViewInfo
      style={{}}
      styleGridBtn={{}}
      arrayBtn={buttons}
      loading={false}
      description={_props.data.text}
    />
  );
};

export default BoxInfo;
