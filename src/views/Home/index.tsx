import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getListTasks} from 'store/modules/Tasks/actions';

import {ListItems} from 'templates';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const {loading, tasks} = useSelector((state: any) => state.Tasks);

  useEffect(() => {
    dispatch(getListTasks());
  });

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
        console.log(_item);
      }}
    />
  );
};

export default Home;
