import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { instance } from "../services/instance";

export default function BookingForm() {
  const route = useRoute();
  const navigation = useNavigation();
  const { artist } = route.params;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticketCount, setTicketCount] = useState("1");

  const handleBooking = async () => {
    if (!fullName || !email || !phone) {
      return Alert.alert("Error", "Please fill in all fields");
    }

    try {
      const res = await instance.post("/bookings", {
        fullName,
        email,
        phone,
        ticketCount: parseInt(ticketCount, 10) || 1,
      });

      Alert.alert(
        "Succès",
        `Votre réservation est confirmée ! Code : ${
          res.data.code || res.data.confirmationCode
        }`
      );
      navigation.navigate("MyBookings", { email });
    } catch (err) {
      Alert.alert("Erreur", err.response?.data?.error || "Booking failed");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.BookingForm}>
        <View style={styles.container}>
          <Text style={styles.title}>Réserver pour </Text>
          <Text style={styles.artistname}>{artist.name}</Text>

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
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Phone"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Number of Tickets"
            style={styles.input}
            value={ticketCount}
            onChangeText={setTicketCount}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.btn} onPress={handleBooking}>
            <Text style={styles.btnText}>Confirmer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 18,
    backgroundColor: "#e7c427ff",
    width: "95%",
  },
  BookingForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 15,
    color: "#111",
    textAlign: "center",
  },
    artistname: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
    color: "#ffffffff",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 8,
    borderColor: "#000000ff",
    borderWidth: 2,
    marginBottom: 12,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  bg: {
    width: "100%",
    flex: 1,
    paddingBottom: 40,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
