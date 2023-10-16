/* eslint-disable react/prop-types */
import { FlatList, View, StyleSheet, Text, } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import theme from '../theme/theme';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E5E7',
    flex: 1,
  },
  separator: {
    // backgroundColor: '#E1E5E7',
    height: 10,
  },
});


const RepositoryList = () => {
  // const { repositories:list  } = useRepositories();
  // const repositoryNodes = list
  //   ? list.edges.map(edge => edge.node)
  //   : [];
  const [repositories, setRespositories] = useState([])
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  const ItemSeparator = () => <View style={styles.separator} />;
  const RenderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fff';
    const color = item.id === selectedId ? theme.colors.primary : theme.colors.textPrimary;
    return <RepositoryItem data={item} backgroundColor={backgroundColor} onPress={() => setSelectedId(item.id)} textColor={color} />;
  };
  const [selectedId, setSelectedId] = useState('');
  useEffect(() => {
    if (!loading) {
      // setRespositories(data.repositories.edges.map(e => e.node))
      let temp = (data.repositories.edges.map(e => e.node))
      setRespositories([...temp])
    }
  }, [data])
  return (
    <>
      {/* <FlatList style={styles.container} data={repositories} ItemSeparatorComponent={ItemSeparator} renderItem={RenderItem} />  */}
      {
        !loading ? <FlatList style={styles.container} data={repositories} ItemSeparatorComponent={ItemSeparator} renderItem={RenderItem} /> : <Text style={styles.container}>loading</Text>
      }
    </>
  )

};

export default RepositoryList;
