import React from 'react';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Mapsimport {Box, Label} from 'components';

import {Box, Label} from 'components';

import {styles} from './styles';

const ViewMaps: React.FC = () => {
  return (
    <Box styles={styles.gridInfo}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.MapsView}
        loadingEnabled={true}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <Box styles={styles.boxAddressInfo}>
        <Label style={{}}>MAPS</Label>
      </Box>
    </Box>
  );
};

export default ViewMaps;
