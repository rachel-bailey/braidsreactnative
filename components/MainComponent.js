import React, { Component } from 'react';
import SearchBraids from './SearchBraids';
import { BRAIDS } from '../shared/braids';
import { View } from 'react-native';
import BraidInfo from './BraidInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            braids: BRAIDS,
            selectedBraid: null
        };
    }

    onBraidSelect(braidId) {
        this.setState({selectedBraid: braidId})
    }

    render() {
        return (
            <View styles={{flex: 1}}>
                <SearchBraids 
                    braids={this.state.braids}
                    onPress={braidId => this.onBraidSelect(braidId)} 
                />
                <BraidInfo
                    braid={this.state.braids.filter(
                        braid => braid.id === this.state.selectedBraid)[0]}
                />
            </View>
        )
    }
}

export default Main;