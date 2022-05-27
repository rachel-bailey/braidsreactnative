import React from 'react';
import { FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

function SearchBraids(props) {

    const renderBraidItem = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.price}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{source: require('./images/anastasia.jpg')}}
            />
        );
    };
    return (
        <FlatList
            data={props.braids}
            renderItem={renderBraidItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default SearchBraids;