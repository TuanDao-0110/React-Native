/* eslint-disable react/prop-types */

import { Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const RepositoryItem = ({ data, onPress, backgroundColor, textColor }) => {
  const styles = StyleSheet.create({
    item: {
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: 30,
      paddingTop: Constants.statusBarHeight,
    },
  });

  return (
    <Text onPress={onPress} style={styles.item} >
      {data.id}
    </Text>
  );
};

export default RepositoryItem;
