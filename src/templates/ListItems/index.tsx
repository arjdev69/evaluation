import React from 'react';

import {ListObjects} from 'components';

export interface Props {
  data: any;
  loading: false;
  columns: {key: string; name: string};
  fnCallback: any;
}

const ListItems: React.FC<Props> = (_props) => {
  return (
    <ListObjects
      data={_props.data}
      loading={_props.loading}
      columns={_props.columns}
      fnCallback={_props.fnCallback}
    />
  );
};

export default ListItems;
