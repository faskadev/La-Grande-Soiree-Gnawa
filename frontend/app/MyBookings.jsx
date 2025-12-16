import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { instance } from '../services/instance';

export default function MyBookings() {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    if (!email) return;

    try {
      const res = await instance.get(`/bookings/email/${email}`);
      setBookings(res.data);
    } catch (err) {
      alert('Aucune réservation trouvée.');
    }
  };

  return (
    <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.bg}
          resizeMode="cover"
        >
    <View style={styles.container}>
      <Text style={styles.title}>Mes Réservations</Text>

      <TextInput
        placeholder="Entrer votre email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.btn} onPress={fetchBookings}>
        <Text style={styles.btnText}>Rechercher</Text>
      </TouchableOpacity>

      <FlatList
        data={bookings}
        keyExtractor={(item) => String(item.id)}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>Code : {item.code || item.confirmationCode}</Text>
            <Text>Email : {item.email}</Text>
            <Text>Tickets : {item.ticketCount}</Text>
            <Text>Total : {item.totalPrice} DH</Text>
            <Text>Date : {item.createdAt?.slice(0, 10)}</Text>
          </View>
        )}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    flex: 1 
  },
  bg: {
    width: "100%",
    flex: 1,
    paddingBottom: 40,
  },

  title: { 
    fontSize: 38, 
    fontWeight: '700', 
    color: '#f1eaeaff',
    marginBottom: 15,
    marginTop: 70,
    textAlign: 'center',
    
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    borderColor: '#e7c427ff',
    borderWidth: 4,
    marginBottom: 10,

  },
  btn: {
    backgroundColor: '#e7c427ff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 20, 
    fontWeight: '700'
  },
  card: {
    backgroundColor: '#fafafa',
    padding: 15,
    borderRadius: 15,
    borderColor: '#e7c427ff',
    borderWidth: 4,
    marginBottom: 10,
  },
  code: { 
    fontWeight: '700', 
    marginBottom: 5 
  },

});
