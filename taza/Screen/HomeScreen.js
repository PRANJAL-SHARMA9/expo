import * as React from 'react';
import { View, Text, Button, Image, ScrollView, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  const categories = [
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Science",
    "Health",
    "Politics",
    "World"
];
    const news = [
      {
        id: '1',
        title: 'News 1',
        image: 'https://tinypng.com/images/social/website.jpg',
        description: 'Last month, giant panda cub Xiao Qi Ji hit a big milestone—he successfully participated in an awake blood draw! Get the latest #PandaStory update from assistant curator Laurie Thompson. ',
        date: 'January 20, 2021'
      },
      {
        id: '2',
        title: 'News 1',
        image: 'https://tinypng.com/images/social/website.jpg',
        description: 'Last month, giant panda cub Xiao Qi Ji hit a big milestone—he successfully participated in an awake blood draw! Get the latest #PandaStory update from assistant curator Laurie Thompson. ',
        date: 'January 20, 2021'
      },
      {
        id: '3',
        title: 'News 1',
        image: 'https://tinypng.com/images/social/website.jpg',
        description: 'Last month, giant panda cub Xiao Qi Ji hit a big milestone—he successfully participated in an awake blood draw! Get the latest #PandaStory update from assistant curator Laurie Thompson. ',
        date: 'January 20, 2021'
      },{
        id: '4',
        title: 'News 1',
        image: 'https://tinypng.com/images/social/website.jpg',
        description: 'Last month, giant panda cub Xiao Qi Ji hit a big milestone—he successfully participated in an awake blood draw! Get the latest #PandaStory update from assistant curator Laurie Thompson. ',
        date: 'January 20, 2021'
      },
      {
        id: '5',
        title: 'News 1',
        image: 'https://tinypng.com/images/social/website.jpg',
        description: 'Last month, giant panda cub Xiao Qi Ji hit a big milestone—he successfully participated in an awake blood draw! Get the latest #PandaStory update from assistant curator Laurie Thompson. ',
        date: 'January 20, 2021'
      },
      {
        id: '6',
        title: 'News 1',
        image: 'https://tinypng.com/images/social/website.jpg',
        description: 'Last month, giant panda cub Xiao Qi Ji hit a big milestone—he successfully participated in an awake blood draw! Get the latest #PandaStory update from assistant curator Laurie Thompson. ',
        date: 'January 20, 2021'
      }
    ];

    return (
      <View style={{ flex: 1, paddingTop: 55, paddingHorizontal: 20 }}>
      <View style={{ backgroundColor:'orange', padding: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Taza.ai</Text>
        <View style={{ flexDirection:'row'}} >
        <Entypo name="newsletter" size={24} color="black" />
        <Text>Delhi,India</Text>
        </View>
      </View>
     
      <View style={{backgroundColor: '#e5e5e5', padding: 10, height: 50}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Text key={index} style={{ padding: 1, fontWeight: 'bold', fontSize: 18, color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 10,margin:1,}}>{category}</Text>
        ))}
      </ScrollView>
    </View>
      <ScrollView>
        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10, padding: 10, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1}}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 10 }} />
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{item.title}</Text>
                  <Text style={{ color: 'gray', marginVertical: 5}}>{item.description}</Text>
                  <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{item.date}</Text>
                  <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{item.category}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
    );
}
export default HomeScreen;