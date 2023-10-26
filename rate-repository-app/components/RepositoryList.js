/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FlatList, View, StyleSheet, Text, Pressable, } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import theme from '../theme/theme';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { sortArrayOfObjectsByDate } from '../utils/helper';
import { highestRate, lastestRepo, lowestRate } from '../utils/router';
import SelectDiago from './SelectDiago';
import { Icon, MD3Colors } from 'react-native-paper';
import SearchRepo from './SearchBar';
import useFindRepo from '../graphQL/hooks/useFIndRepo';
import { useContext } from 'react';
import AuthStorageContext from '../context/authStorageContext';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E5E7',
    flex: 1,
  },
  separator: {
    height: 10,
  },
  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sort: {
    fontSize: 40,
  }
});
export const RepositoryListContainer = ({ repositories, findRepo }) => {
  const [selectedId, setSelectedId] = useState('');
  const [sort, setSort] = useState(highestRate)
  const [visible, setVisible] = useState(false);
  const naviagate = useNavigate()
  const repositoryNodes = repositories
    ? repositories?.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;
  const RenderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#fff';
    const color = item.id === selectedId ? theme.colors.primary : theme.colors.textPrimary;
    return <RepositoryItem data={item} backgroundColor={backgroundColor} onPress={() => {
      setSelectedId(item.id)
      console.log(item)
      naviagate(`/${item.id}`, { state: item })
    }
    } textColor={color}
      key={item.id}
    />;
  };

  return (
    < FlatList
      data={sortArrayOfObjectsByDate(repositoryNodes, sort)}
      style={styles.container}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}
      ListHeaderComponent={() =>
        <>
          <SearchRepo findRepo={findRepo} />
          <Pressable
            style={styles.header}
            onPress={() => setVisible(true)}
          >
            <Text
              style={styles.sort}
            >
              {sort}
            </Text>

            <Icon
              source='arrow-down'
              color={MD3Colors.secondary0}
              size={30}
            />
          </Pressable>
          <SelectDiago setVisible={setVisible} visible={visible} setSort={setSort} />
        </>
      }
    />
  );
};



const RepositoryList = () => {
  const [repositories, setRespositories] = useState(null)
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const [findRepo, findRepoData, findRepoLoading, findRepoError, findRepoCalled] = useFindRepo()
  useEffect(() => {
    if (findRepoData) {
      if (findRepoData?.repositories.edges.length > 0) {
        setRespositories(findRepoData.repositories)
      }
    }
  }, [findRepoData, findRepoLoading, findRepoCalled])

  useEffect(() => {
    if (!loading && !findRepoData) {
      setRespositories(data.repositories)
    }
  }, [loading])
  return (
    <>
      {
        !loading ? <RepositoryListContainer repositories={repositories} findRepo={findRepo} /> : <Text style={styles.container}>loading</Text>
      }
    </>
  )

};

export default RepositoryList;
