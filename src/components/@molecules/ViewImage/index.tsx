import React from 'react';

import * as UI from 'react-native';

import {ICON_NONE} from 'utils/images';

import {Box, Label} from 'components';

const ViewImage: React.FC = () => {
  return (
    <Box styles={{}}>
      <Box styles={{}}>
        <Label>TESTE</Label>
        <UI.Image style={{}} source={ICON_NONE} />
      </Box>
      <UI.Image style={{}} source={ICON_NONE} />
    </Box>
  );
};

export default ViewImage;
