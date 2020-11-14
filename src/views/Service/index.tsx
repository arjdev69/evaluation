import React from 'react';

import {Box, Label} from 'components';
import {styles} from './styles';

// import { Container } from './styles';

const Service: React.FC = () => {
  return (
    <Box styles={styles.box}>
      <Label style={styles.label}>SERVIÇOS</Label>
    </Box>
  );
};

export default Service;
