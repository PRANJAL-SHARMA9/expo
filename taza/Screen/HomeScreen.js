import * as React from 'react';
import { View, Text,Button } from 'react-native';
import SearchScreen from './SearchScreen';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Search"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    );
}
export default HomeScreen;