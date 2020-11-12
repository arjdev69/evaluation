import React from 'react';

import * as UI from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getDetailPlace} from 'store/modules/Places/actions';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'styles';

import {styles} from './styles';

export interface Props {
  route: any;
  navigation: any;
}

const Products: React.FC<Props> = (_props) => {
  const {data} = _props.route.params;
  const dispatch = useDispatch();
  const {loading, place} = useSelector((state: any) => state.Places);

  const getDetailPlaces = () => {
    dispatch(getDetailPlace(data.id));
  };

  React.useLayoutEffect(() => {
    if (place) {
      _props.navigation.setOptions({
        headerTitle: () => (
          <UI.View style={styles.headerTitle}>
            <Icon name="ios-location" size={30} color={COLORS.lightColor} />
            <UI.Text
              style={
                styles.headerText
              }>{`${place.city} - ${place.district}`}</UI.Text>
          </UI.View>
        ),
      });
    }
  }, [_props.navigation, place]);

  React.useEffect(() => {
    getDetailPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.id]);

  return (
    <UI.View>
      <UI.Text>{data.name}</UI.Text>
    </UI.View>
  );
};

export default Products;
