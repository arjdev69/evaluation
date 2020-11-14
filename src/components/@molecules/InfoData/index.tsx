import React from 'react';

import {Box, Label, ButtonCustom} from 'components';

import {styles} from './styles';

export interface Props {
  title: string;
  description: string;
  labelBtn: string;
  onPress: any;
  style: {};
  styleLabels: {};
  styleBtn: {};
}

const InfoData: React.FC<Props> = (_props) => {
  return (
    <Box styles={[styles.box, _props.style]}>
      <Label style={[styles.title, _props.styleLabels]}>{_props.title}</Label>
      <Label style={[styles.description, _props.styleLabels]}>
        {_props.description}
      </Label>
      <ButtonCustom
        key={_props.title}
        loading={false}
        activeOpacity={0.6}
        onPress={_props.onPress}
        style={[styles.btn]}>
        <Label style={[styles.labelBtn, _props.styleBtn]}>
          {_props.labelBtn}
        </Label>
      </ButtonCustom>
    </Box>
  );
};

export default InfoData;
