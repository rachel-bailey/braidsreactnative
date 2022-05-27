import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function BraidInfo(props) {
    return <RenderBraid braid={props.braid} />
}

export default BraidInfo;