import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {Box, ImageLoad, Label} from 'components/@atoms';

import {styles} from './styles';
import {COLORS} from 'styles';

export interface Props {
  styles: {};
  stylesImg: {};
  url: {};
  urlLoad: {};
  user: string;
  title: string;
  comments: string;
  note: any;
}

const ViewComments: React.FC<Props> = (_props) => {
  let stars: JSX.Element[] = [];

  const getStars = () => {
    for (let i = 0; i < _props.note; i++) {
      stars.push(<Icon key={i} name="star" size={16} color={COLORS.primary} />);
    }
    return stars;
  };

  return (
    <Box styles={[styles.box, _props.styles]}>
      <ImageLoad
        styles={[styles.image, _props.stylesImg]}
        url={_props.url}
        urlLoad={_props.urlLoad}
      />
      <Box styles={styles.boxTexts}>
        <Label style={[styles.name]}>{_props.user}</Label>
        <Box styles={styles.boxTitle}>
          <Label style={[styles.title]}>{_props.title}</Label>
          <Box styles={styles.boxStars}>{getStars()}</Box>
        </Box>
        <Label style={[styles.comment]}>{_props.comments}</Label>
      </Box>
    </Box>
  );
};

export default ViewComments;
