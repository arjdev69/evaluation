import React from 'react';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';

import {Box, Label} from 'components';

import {styles} from './styles';
import {COLORS} from 'styles';

export interface Props {
  latLang: {latitude: number; longitude: number};
  title: string;
  description: string;
  address: string;
}

const ViewMaps: React.FC<Props> = (_props) => {
  return (
    <Box styles={styles.gridInfo}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.MapsView}
        loadingEnabled={true}
        region={{
          latitude: _props.latLang.latitude,
          longitude: _props.latLang.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0,
        }}>
        <Marker
          key={'marker'}
          coordinate={{
            latitude: _props.latLang.latitude,
            longitude: _props.latLang.longitude,
          }}
          title={_props.title}
          description={_props.description}
        />
      </MapView>
      <Box styles={styles.boxAddressInfo}>
        <Label style={styles.labelAddress}>{_props.address}</Label>
        <Box styles={[styles.iconLocation]}>
          <Icon name="location" size={24} color={COLORS.primary} />
        </Box>
      </Box>
    </Box>
  );
};

export default ViewMaps;
