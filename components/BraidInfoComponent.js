import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { BRAIDS } from '../shared/braids';

function RenderBraid({ braid }) {
    if (braid) {
        return (
            <Card 
                featuredTitle={braid.name}
                image={require('./images/anastasia.jpg')}
            >
                <Text style={{margin: 10}}>
                    {braid.name}
                    {braid.price}
                </Text>
            </Card>
            
        );
    }
    return <View />;
}

class BraidInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            braids: BRAIDS
        };
    }

    static navigationOptions = {
        title: 'Selected Braid'
    }
    render() {
        const braidId = this.props.navigation.getParam('braidId');
        const braid = this.state.braids.filter(braid => braid.id === braidId)
        return <RenderBraid braid={braid} />
    }
}

export default BraidInfo;