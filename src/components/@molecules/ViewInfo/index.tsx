import React from 'react';

import {Box, ButtonCustom} from 'components';
import {Label} from 'components/@atoms';

import {styles} from './styles';

export interface Props {
  style: {};
  styleGridBtn: {};
  loading: false;
  arrayBtn: any;
  description: string;
}

const ViewInfo: React.FC<Props> = (_props) => {
  return (
    <Box styles={[styles.gridInfo, _props.style]}>
      <Box styles={[styles.grid, _props.styleGridBtn]}>
        {_props.arrayBtn.map(
          (_btn: {
            label: string | null | undefined;
            press: any;
            icon: string;
          }) => (
            <ButtonCustom
              key={_btn.label}
              loading={false}
              activeOpacity={0.6}
              onPress={_btn.press}
              style={[styles.btn]}>
              {_btn.icon}
              <Label style={[styles.label]}>{_btn.label}</Label>
            </ButtonCustom>
          ),
        )}
      </Box>
      <Box styles={[styles.grid, styles.gridComment]}>
        <Label style={[styles.label, styles.description]}>
          {_props.description}
        </Label>
      </Box>
    </Box>
  );
};

export default ViewInfo;
