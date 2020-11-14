import React from 'react';

import {useDispatch} from 'react-redux';

import {openWebUrl} from 'utils';
import {setVisibleModal} from 'store/modules/Modal/actions';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFw from 'react-native-vector-icons/FontAwesome';

import {ViewInfo, AddressModal, InfoData} from 'components';

import {COLORS} from 'styles';
export interface Props {
  data: any;
}

const BoxInfo: React.FC<Props> = (_props) => {
  const route = useNavigation();
  const dispatch = useDispatch();

  const setModalVisible = (params: Boolean) => {
    dispatch(setVisibleModal({['address']: params}));
  };

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
        setModalVisible(true);
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
    <>
      <AddressModal viewBtn={false}>
        <InfoData
          title={'Endereço'}
          description={_props.data.address}
          labelBtn={'Copiar'}
          style={{}}
          styleBtn={{}}
          styleLabels={{}}
          onPress={() => {
            console.log('COPIAR');
          }}
        />
      </AddressModal>
      <ViewInfo
        style={{}}
        styleGridBtn={{}}
        arrayBtn={buttons}
        loading={false}
        description={_props.data.text}
      />
    </>
  );
};

export default BoxInfo;
