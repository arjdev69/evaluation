import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import {Box, ItemClick} from 'components';

export interface Props {
  data: any;
  loading: boolean;
  columns: {key: string; name: string};
  fnCallback: any;
}

const ListObjects: React.FC<Props> = (_props) => {
  return (
    <Box styles={{}}>
      <ScrollView>
        {_props.data.map(
          (_item: any, _idx: string | number | null | undefined) => (
            <ItemClick
              key={_idx}
              styles={{}}
              stylesBtn={{}}
              stylesLabel={{}}
              label={_item[_props.columns.name]}
              children={false}
              fnCallback={() => {
                _props.fnCallback(_item);
              }}
            />
          ),
        )}
      </ScrollView>
    </Box>
  );
};

export default ListObjects;
