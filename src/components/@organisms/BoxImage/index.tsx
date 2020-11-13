import React from 'react';

import {ViewImage, Box, Label} from 'components';

import {styles} from './styles';
export interface Props {
  styles: {};
  urlImgMain: string;
  urlImgSecondary: string;
  text: string;
}

const BoxImage: React.FC<Props> = (_props) => {
  return (
    <Box styles={{}}>
      <ViewImage
        styles={{}}
        stylesImage={{}}
        stylesImgSecondary={{}}
        urlImgMain={_props.urlImgMain}
        urlImgSecondary={_props.urlImgSecondary}
      />
      <Label style={styles.label}>{_props.text}</Label>
    </Box>
  );
};

export default BoxImage;
