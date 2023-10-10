/* eslint-disable react/prop-types */

import { Text, StyleSheet,  Pressable } from 'react-native';
import Constants from 'expo-constants';


const RepositoryItem = ({ data, onPress, backgroundColor, textColor }) => {
  const { id, fullName } = data
  const styles = StyleSheet.create({
    item: {
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: 30,
      paddingTop: Constants.statusBarHeight,
    },
  });

  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text  >
        {id}
      </Text>
      <Text >

        {fullName}
      </Text>
    </Pressable>
  );
};

export default RepositoryItem;
