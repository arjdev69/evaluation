import React from 'react';

import * as UI from 'react-native';

import {ICON_NONE} from 'utils/images';

import {Box} from 'components';

import {styles} from './styles';

export interface Props {
  styles: {};
  stylesImage: {};
  stylesImgSecondary: {};
  urlImgMain: string;
  urlImgSecondary: string;
}

const ViewImage: React.FC<Props> = (_props) => {
  return (
    <Box styles={[styles.box, _props.styles]}>
      <Box styles={[styles.boxImage]}>
        <UI.Image
          style={[styles.image, _props.stylesImage]}
          source={{uri: _props.urlImgMain}}
        />
      </Box>
      <UI.Image
        style={[styles.imageSecondary, _props.stylesImgSecondary]}
        source={{uri: _props.urlImgSecondary}}
      />
    </Box>
  );
};

export default ViewImage;
