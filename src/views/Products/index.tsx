import React, {useCallback} from 'react';

import * as UI from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useDispatch, useSelector} from 'react-redux';
import {getDetailPlace} from 'store/modules/Places/actions';

import {DetailProduct} from 'templates';

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

  const getDetailPlaces = useCallback(() => {
    dispatch(getDetailPlace(data.id));
  }, [dispatch, data.id]);

  React.useEffect(() => {
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
    getDetailPlaces();
  }, [_props.navigation, place, getDetailPlaces]);

  return (
    <ScrollView>
      <DetailProduct data={place} />
    </ScrollView>
  );
};

export default Products;
