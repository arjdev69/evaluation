import React, {useCallback, useEffect, useLayoutEffect, useRef} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getDetailPlace} from 'store/modules/Places/actions';
import _ from 'lodash';

import * as UI from 'react-native';

import {DetailProduct} from 'templates';

import Icon from 'react-native-vector-icons/Ionicons';
import {Loading, NotFound} from 'components';

import {styles} from './styles';
import {COLORS} from 'styles';

export interface Props {
  route: any;
  navigation: any;
}

const Products: React.FC<Props> = (_props) => {
  const {data} = _props.route.params;
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const {loading, place} = useSelector((state: any) => state.Places);
  const {scrollControl} = useSelector((state: any) => state.Scroll);

  const getDetailPlaces = useCallback(() => {
    dispatch(getDetailPlace(data.id));
  }, [dispatch, data.id]);

  const onPressTouch = (_val: number) => {
    scrollRef.current?.scrollTo({
      y: _val,
      animated: true,
    });
  };

  useLayoutEffect(() => {
    if (place) {
      _props.navigation.setOptions({
        headerTitle: () => (
          <UI.View style={styles.headerTitle}>
            <Icon name="ios-location" size={30} color={COLORS.lightColor} />
            <UI.Text style={styles.headerText}>
              {!_.isEmpty(place)
                ? `${place.city} - ${place.district}`
                : 'Nenhum registro encontrado.'}
            </UI.Text>
          </UI.View>
        ),
      });
    }
  }, [_props.navigation, place]);

  useEffect(() => {
    getDetailPlaces();
  }, [data.id, getDetailPlaces]);

  useEffect(() => {
    onPressTouch(scrollControl);
  }, [dispatch, scrollControl]);

  return (
    <UI.ScrollView ref={scrollRef}>
      {loading && (
        <Loading
          size={'large'}
          color={COLORS.primary}
          styles={styles.loading}
        />
      )}
      {!_.isEmpty(place) ? (
        <DetailProduct data={place} />
      ) : (
        <NotFound message={'Nenhum dados encontrados...'} />
      )}
    </UI.ScrollView>
  );
};

export default Products;
