import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../constant/images/Back';
import CustomImage from './CustomImage';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const BackButton = ({handlePress = null}) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback
      onPress={handlePress !== null ? handlePress : handleClick}>
      <View style={styles.backButton}>
        <CustomImage source={Back} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 16,
    width: 24,
    height: 24,
  },
});
