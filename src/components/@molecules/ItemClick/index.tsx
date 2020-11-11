import React from 'react';

import {Box, Label} from 'components';
import {ButttonCustom} from 'components/@atoms';

import {styles} from './styles';

export interface Props {
  styles: {};
  stylesLabel: {};
  stylesBtn: {};
  fnCallback: any;
  label: string;
  children: any;
}

const ItemClick: React.FC<Props> = (_props) => {
  return (
    <Box styles={[styles.boxListItem, _props.styles]}>
      {_props.children ? (
        _props.children
      ) : (
        <ButttonCustom
          loading={false}
          activeOpacity={0.6}
          onPress={_props.fnCallback}
          style={[styles.btn, _props.stylesBtn]}>
          <Label style={[styles.labelBtn, _props.stylesLabel]}>
            {_props.label}
          </Label>
        </ButttonCustom>
      )}
    </Box>
  );
};

export default ItemClick;
