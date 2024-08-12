import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const CustomImage = props => {
  const {
    style: imgStyle = {},
    source = null,
    resizeMode = 'cover',
    tintColor,
  } = props;
  let image = source;
  let resizemode = FastImage.resizeMode.cover;

  if (resizeMode === 'contain') {
    resizemode = FastImage.resizeMode.contain;
  } else if (resizeMode === 'center') {
    resizemode = FastImage.resizeMode.center;
  } else if (resizeMode === 'stretch') {
    resizemode = FastImage.resizeMode.stretch;
  }
  if (
    source &&
    typeof source === 'object' &&
    'uri' in source &&
    (source.uri === null || source.uri === undefined)
  ) {
    resizemode = FastImage.resizeMode.contain;
  }

  return (
    <FastImage
      {...props}
      style={[styles.imgStyle, imgStyle]}
      source={image}
      tintColor={tintColor}
      resizeMode={resizemode}
      priority={FastImage.priority.normal}
    />
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
