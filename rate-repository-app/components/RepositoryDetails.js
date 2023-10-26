import { useLocation } from 'react-router'
import RepositoryItem from './RepositoryItem'

import theme from '../theme/theme'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { SINGLE_REPOSITORIES } from '../graphQL/queries'
import { setDate } from '../utils/helper'

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#FFFFFF',
        // height: '90%',
        // flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    separator: {
        height: 10,
        backgroundColor: 'blue'
    },
    item: {
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    circle: {
        borderColor: '#5395CE',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        marginBottom: 20,
        borderWidth: 2,
        justifyContent: 'center'
    },
    rating: {
        color: '#5395CE',
        fontSize: 20,
        textAlign: 'center',
    },
    content: {
        width: '80%'
    },
    username: {
        fontSize: 25,
        fontWeight: '700'
    },
    time: {
        fontSize: 18,
        fontWeight: '200'
    },
    discription: {
        fontSize: 14,
        textAlign: 'justify',
        fontWeight: '400', 
        marginBottom: 50
    }
})
const ItemSeparator = () => <View style={styles.separator} />;

export const Review = ({ review }) => {
    const { id,
        text,
        rating,
        createdAt,
        user,
        repository
    } = review.node
    return <View style={styles.item}>
        <View
            style={styles.circle}
        >
            <Text style={styles.rating}>
                {rating}
            </Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.username}>{user &&user.username}{repository && repository.fullName}</Text>
            <Text style={styles.time}>{setDate(createdAt)}</Text>
            <Text style={styles.discription} key={id}>
                {text}
            </Text>
        </View>
    </View>
}
const RespositoryDetails = () => {
    const { state } = useLocation()
    const { data, loading } = useQuery(SINGLE_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    })
    if (loading) { return <Text>loading</Text> }
    return <SafeAreaView
        style={styles.viewContainer}
    >
        {data && <FlatList
            data={data.repository.reviews.edges}
            renderItem={({ item }) => <Review review={item} />
            }
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() =>
                <RepositoryItem backgroundColor={'#ffff'} data={state} textColor={theme.colors.primary} />
            }
        />}

    </SafeAreaView>
}



export default RespositoryDetails