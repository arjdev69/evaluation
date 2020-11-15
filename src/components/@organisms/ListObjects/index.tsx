import React, {useState} from 'react';

import {ScrollView} from 'react-native-gesture-handler';

import {Box, ItemClick, Loading} from 'components';

import {styles} from './styles';
import {COLORS} from 'styles';

export interface Props {
  data: any;
  loading: boolean;
  columns: {key: string; name: string};
  fnCallback: any;
}

const ListObjects: React.FC<Props> = (_props) => {
  const [load, setLoad] = useState(false);

  return (
    <Box styles={styles.box}>
      {_props.loading ||
        (load && (
          <Loading
            size={'large'}
            color={COLORS.primary}
            styles={styles.loading}
          />
        ))}
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
                setLoad(true);
                setTimeout(() => {
                  setLoad(false);
                  _props.fnCallback(_item);
                }, 600);
              }}
            />
          ),
        )}
      </ScrollView>
    </Box>
  );
};

export default ListObjects;
