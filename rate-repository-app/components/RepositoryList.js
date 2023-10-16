/* eslint-disable react/prop-types */
import { FlatList, View, StyleSheet, Text, } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import theme from '../theme/theme';
import useRepositories from '../graphQL/hooks/useRespositories';
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

const tempRepo = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },

];

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
  }, [])
  return (
    <>
      {

        !loading ? <FlatList style={styles.container} data={repositories} ItemSeparatorComponent={ItemSeparator} renderItem={RenderItem} /> : <Text style={styles.container}>loading</Text>
      }
    </>
  )

};

export default RepositoryList;
