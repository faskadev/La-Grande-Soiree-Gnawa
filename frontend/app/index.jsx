import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useGetEvents } from '../services/events/queries';


export default function Home() {
  const navigation = useNavigation();

  const { data: events, isLoading ,error} = useGetEvents();
  console.log(events);
  
  if (isLoading || !events) {
    return (
      <View style={styles.center}>
        <Text>Loading event...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: events[0].banner }}
        style={styles.banner}
        resizeMode="cover"
      />

      <Text style={styles.title}>{events[0].title}</Text>
      <Text style={styles.desc}>{events[0].description}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ArtistsList')}
      >
        <Text style={styles.btnText}>Voir les artistes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  banner: { 
    width: '100%',
    height: 220 
  },
  title: { fontSize: 22, fontWeight: '700', margin: 15 },
  desc: { fontSize: 15, marginHorizontal: 15, color: '#444' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  btnText: { color: '#fff', fontSize: 16 },
});

