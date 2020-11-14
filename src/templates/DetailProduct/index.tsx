import React from 'react';

import {BoxImage, BoxInfo} from 'components';

export interface Props {
  data: any;
}

const DetailProduct: React.FC<Props> = (_props) => {
  return (
    <>
      <BoxImage
        styles={{}}
        urlImgMain={_props.data.urlFoto}
        urlImgSecondary={_props.data.urlLogo}
        text={_props.data.title}
      />
      <BoxInfo data={_props.data} />
    </>
  );
};

export default DetailProduct;
