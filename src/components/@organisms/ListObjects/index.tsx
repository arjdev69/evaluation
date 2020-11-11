import React from 'react';

import {Box, ItemClick} from 'components';

const ListObjects: React.FC = () => {
  return (
    <Box styles={{}}>
      <ItemClick
        styles={{}}
        stylesBtn={{}}
        stylesLabel={{}}
        label={'LABEL'}
        children={false}
        fnCallback={() => {
          console.log('1');
        }}
      />
    </Box>
  );
};

export default ListObjects;
