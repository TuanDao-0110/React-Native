/* eslint-disable react/prop-types */
import { Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const RepositoryItem = ({ data, onPress, backgroundColor, textColor }) => {
console.log(data)
  const styles = StyleSheet.create({
    item: {
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: 30,
      paddingTop: Constants.statusBarHeight,
    },
  });

//   const { item } = data;
  return (
    <Text style={styles.item} onPress={onPress}>
      {data.fullName}{' '}
    </Text>
  );
};

export default RepositoryItem;
