import * as React from 'react';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchRepo = ({ findRepo }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query)
    const onPressSearch = () => {
        if (searchQuery.length > 0) {
            findRepo({ variables: { searchKeyword: searchQuery } })
        }
        else {
            findRepo({ variables: { first: 2 } })
        }
    }


    return (
        <Searchbar
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery}
            mode='view'
            onIconPress={onPressSearch}
        />
    );
};

export default SearchRepo;