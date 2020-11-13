import React from 'react';

import {ViewImage, Box} from 'components';

export interface Props {
  styles: {};
  urlImgMain: string;
  urlImgSecondary: string;
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
    </Box>
  );
};

export default BoxImage;
