import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const API_URL = 'https://your-backend.example.com/api';

export default function MyBookings() {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    if (!email) return;

    try {
      const res = await axios.get(`${API_URL}/bookings/email/${email}`);
      setBookings(res.data);
    } catch (err) {
      alert('Aucune réservation trouvée.');
    }
  };

  return (
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
            <Text style={styles.code}>Code : {item.code}</Text>
            <Text>Artiste : {item.artist?.name}</Text>
            <Text>Date : {item.createdAt?.slice(0, 10)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 15 },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { color: '#fff', textAlign: 'center' },
  card: {
    backgroundColor: '#fafafa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  code: { fontWeight: '700', marginBottom: 5 },
});
