import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getListTasks} from 'store/modules/Places/actions';

import {ListItems} from 'templates';

export interface Props {
  navigation: any;
}

const Home: React.FC<Props> = (_props) => {
  const dispatch = useDispatch();

  const {loading, tasks} = useSelector((state: any) => state.Places);

  useEffect(() => {
    dispatch(getListTasks());
  }, [dispatch]);

  const COLUMNS = {
    key: 'id',
    name: 'name',
  };

  return (
    <ListItems
      data={tasks}
      loading={loading}
      columns={COLUMNS}
      fnCallback={(_item: any) => {
        _props.navigation.push('DetailProduct', {data: _item});
      }}
    />
  );
};

export default Home;
