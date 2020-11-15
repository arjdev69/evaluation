import React from 'react';

import {Box, ImageLoad} from 'components';

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
        <ImageLoad
          styles={[styles.image, _props.stylesImage]}
          url={{uri: _props.urlImgMain}}
          urlLoad={{uri: _props.urlImgMain}}
        />
      </Box>
      <Box styles={[styles.boxImgSecondary]}>
        <ImageLoad
          styles={[styles.imageSecondary, _props.stylesImgSecondary]}
          url={{uri: _props.urlImgSecondary}}
          urlLoad={{uri: _props.urlImgMain}}
        />
      </Box>
    </Box>
  );
};

export default ViewImage;
