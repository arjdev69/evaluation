import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {openWebUrl, copyToClipboard} from 'utils';
import {setVisibleModal} from 'store/modules/Modal/actions';
import {setScrollRef} from 'store/modules/ScrollControl/actions';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFw from 'react-native-vector-icons/FontAwesome';

import {
  ViewInfo,
  AddressModal,
  InfoData,
  ViewMaps,
  ViewComments,
} from 'components';

import {COLORS} from 'styles';
export interface Props {
  data: any;
}

const BoxInfo: React.FC<Props> = (_props) => {
  const route = useNavigation();
  const dispatch = useDispatch();
  const {scrollControl} = useSelector((state: any) => state.Scroll);

  const setModalVisible = (params: Boolean) => {
    dispatch(setVisibleModal({['address']: params}));
  };

  const moveScroll = () => {
    const move = scrollControl > 0 ? scrollControl + 1 : 9990;
    dispatch(setScrollRef(move));
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
        moveScroll();
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
            copyToClipboard(_props.data.address);
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
      <ViewMaps
        latLang={{
          latitude: _props.data.lat,
          longitude: _props.data.long,
        }}
        title={_props.data.title}
        description={_props.data.city}
        address={_props.data.street}
      />
      {_props.data &&
        _props.data.comments.map(
          (
            comment: {
              urlPhoto: any;
              comment: string;
              user: string;
              title: string;
              name: string;
              note: number;
            },
            ict: string | number | null | undefined,
          ) => (
            <ViewComments
              key={ict}
              styles={{}}
              stylesImg={{}}
              url={{uri: comment.urlPhoto}}
              urlLoad={{uri: comment.urlPhoto}}
              user={comment.name}
              title={comment.title}
              comments={comment.comment}
              note={comment.note}
            />
          ),
        )}
    </>
  );
};

export default BoxInfo;
