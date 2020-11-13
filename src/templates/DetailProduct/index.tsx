import {BoxImage} from 'components';
import React from 'react';

export interface Props {
  data: any;
}

const DetailProduct: React.FC<Props> = (_props) => {
  return (
    <BoxImage
      styles={{}}
      urlImgMain={_props.data.urlFoto}
      urlImgSecondary={_props.data.urlLogo}
    />
  );
};

export default DetailProduct;
