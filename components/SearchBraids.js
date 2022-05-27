import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { BRAIDS } from '../shared/braids';

class SearchBraids extends Component {

    constructor(props) {
        super(props);
        this.state = {
            braids: BRAIDS
        };
    }

    static navigationOptions= {
        title: 'Search Braids'
    }
    
    render () {
        const { navigate } = this.props.navigation;
        const renderBraidItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.price}
                    onPress={() => navigate('BraidInfo', { braidId: item.id})}
                    leftAvatar={{source: require('./images/anastasia.jpg')}}
                />
            );
        };
        return (
            <FlatList
                data={this.state.braids}
                renderItem={renderBraidItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default SearchBraids;