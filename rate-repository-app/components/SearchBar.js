import * as React from 'react';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchRepo = ({ findRepo }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query)
    const onPressSearch = () => findRepo({ variables: { searchKeyword: searchQuery } })


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