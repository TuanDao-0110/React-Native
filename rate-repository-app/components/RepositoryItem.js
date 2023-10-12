/* eslint-disable react/prop-types */
import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import Constants from 'expo-constants';
import { shortenNumber } from '../utils/helper';
import Button from './Button';
const RepositoryItem = ({ data, onPress, backgroundColor, textColor }) => {
  const { id, fullName, ownerAvatarUrl, forksCount, stargazersCount,
    ratingAverage,
    reviewCount, language } = data
  const styles = StyleSheet.create({
    item: {
      backgroundColor: backgroundColor,
      color: textColor,
      flexDirection: 'row',
      paddingBottom: Constants.statusBarHeight,
      paddingTop: Constants.statusBarHeight,
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
    left: {
      flexGrow: 1,
      paddingLeft: Constants.statusBarHeight,
    },
    textId: {
      fontSize: 30,

    },
    fullName: {
      paddingBottom: 5,
      // paddingTop:5
    },
    tinyLog: {
      height: 60,
      width: 60,
      borderRadius: 5
    },
    numbers: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-around',
      paddingTop: 20
    },
    eachNumber: {

    },
    numbersView: {
      fontSize: 22,
      color: '#414141',
      fontWeight: '800',
      textAlign: 'center'
    },
    numberInfo: {
      color: '#B8B8B8',
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 15,
      paddingTop: 10
    }
  });

  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.tinyLog} />
      <View style={styles.left} >
        <Text style={styles.textId}>
          {id}
        </Text>
        <Text style={styles.fullName} >
          {fullName}
        </Text>
        {/* <Pressable
          style={styles.button}
        >
          <Text style={styles.textButton}>

            {language}
          </Text>

        </Pressable> */}
        <Button content={language}/>
      </View>
      <View style={styles.numbers}  >
        <View style={styles.eachNumber}>
          <Text style={styles.numbersView}>
            {
              shortenNumber(forksCount)
            }
          </Text>
          <Text style={styles.numberInfo}>
            Forks
          </Text>
        </View>
        <View >
          <Text style={styles.numbersView}>
            {shortenNumber(stargazersCount)}
          </Text>
          <Text style={styles.numberInfo}>
            Starts
          </Text>
        </View>
        <View >
          <Text style={styles.numbersView}>
            {shortenNumber(ratingAverage)}
          </Text>
          <Text style={styles.numberInfo}>
            Rating
          </Text>
        </View>
        <View >
          <Text style={styles.numbersView}>
            {shortenNumber(reviewCount)}
          </Text>
          <Text style={styles.numberInfo}>
            Reviews
          </Text>

        </View>
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
