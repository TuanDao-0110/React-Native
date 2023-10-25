/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FlatList, View, StyleSheet, Text, } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import theme from '../theme/theme';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E5E7',
    flex: 1,
  },
  separator: {
    height: 10,
  },
});
export const RepositoryListContainer = ({ repositories }) => {
  const [selectedId, setSelectedId] = useState('');
  const naviagate = useNavigate()
  const repositoryNodes = repositories
    ? repositories?.edges.map((edge) => edge.node)
    : [];
  console.log(repositoryNodes)
  const ItemSeparator = () => <View style={styles.separator} />;
  const RenderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fff';
    const color = item.id === selectedId ? theme.colors.primary : theme.colors.textPrimary;
    return <RepositoryItem data={item} backgroundColor={backgroundColor} onPress={() => {
      setSelectedId(item.id)
      naviagate(`/${item.id}`, { state: item })
    }
    } textColor={color}
      key={item.id}
    />;
  };

  return (
    < FlatList
      data={repositoryNodes}
      style={styles.container}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}

    />
  );
};



const RepositoryList = () => {
  const [repositories, setRespositories] = useState(null)
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  useEffect(() => {
    if (!loading) {
      setRespositories(data.repositories)
    }
  }, [loading])
  return (
    <>
      {
        !loading ? <RepositoryListContainer repositories={repositories} /> : <Text style={styles.container}>loading</Text>
      }
    </>
  )

};

export default RepositoryList;
