import React from 'react';

import {ModalComp} from 'components';

import {ICON_NONE} from 'utils/images';

import {styles} from './styles';

export interface Props {
  children: any;
  viewBtn: any;
}

const AddressModal: React.FC<Props> = (_props) => {
  return (
    <ModalComp
      name={'address'}
      icon={ICON_NONE}
      stylesModal={styles.styleModalView}
      stylesIcon={{}}
      animationType="fade"
      transparent={true}
      label={''}
      viewBtn={_props.viewBtn}>
      {_props.children}
    </ModalComp>
  );
};

export default AddressModal;
