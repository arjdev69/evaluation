import {Label} from 'components';
import React from 'react';
import {Text, View} from 'react-native';

export interface Props {
  route: any;
  navigation: any;
}

const Products: React.FC<Props> = (_props) => {
  const {data} = _props.route.params;

  React.useLayoutEffect(() => {
    _props.navigation.setOptions({
      title: data.name,
    });
  }, [_props.navigation, data]);

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default Products;
