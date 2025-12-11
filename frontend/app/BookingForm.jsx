import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = 'https://your-backend.example.com/api';

export default function BookingForm() {
  const route = useRoute();
  const navigation = useNavigation();
  const { artist } = route.params;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = async () => {
    if (!fullName || !email) {
      return Alert.alert('Error', 'Please fill in all fields');
    }

    try {
      const res = await axios.post(`${API_URL}/bookings`, {
        fullName,
        email,
        artistId: artist.id,
      });

      Alert.alert('Succès', `Votre réservation est confirmée ! Code : ${res.data.code}`);
      navigation.navigate('MyBookings', { email });
    } catch (err) {
      Alert.alert('Erreur', err.response?.data?.error || 'Booking failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réserver pour {artist.name}</Text>

      <TextInput
        placeholder="Nom complet"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.btn} onPress={handleBooking}>
        <Text style={styles.btnText}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 20 },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#111',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});
