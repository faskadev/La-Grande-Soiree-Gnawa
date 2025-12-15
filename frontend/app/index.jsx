import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useGetEvents } from "../services/events/queries";

export default function Home() {
  const navigation = useNavigation();
  const { data: events, isLoading } = useGetEvents();

  if (isLoading || !events) {
    return (
      <View style={styles.center}>
        <Text>Loading event...</Text>
      </View>
    );
  }

return (
  <ImageBackground
    source={require("../assets/images/background.png")}
    style={styles.bg}
    resizeMode="cover"
  >
    <ScrollView contentContainerStyle={styles.scrollContent}> 
        
        <Image
          source={{ uri: events.bannerUrl }}
          style={styles.bannerUrl}
          resizeMode="cover"
        />
   
        <Text style={styles.title}>{events.title}</Text>
        <Text style={styles.desc}>{events.description}</Text>

      <View style={styles.overlay}> 
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>📍 Lieu</Text>
            <Text style={styles.cardValue}>{events.location}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>📅 Date</Text>
            <Text style={styles.cardValue}>{events.date}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>💰 Prix du ticket</Text>
            <Text style={styles.cardValue}>{events.ticketPrice} MAD</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("ArtistsList")}
        >
          <Text style={styles.btnText}>Découvrir les artistes</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  scrollContent: {
    flex: 1,
    marginTop: 40,
  },

  bg: {
    width: "100%",
    flex: 1,
    paddingBottom: 40,
  },

  overlay: {
    backgroundColor: "#888f8d46", 
    padding: 16,
    alignItems: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bannerUrl: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    display: "none",
  },

  title: {
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffffff",
    marginBottom: 12,
    marginTop: 30,
  },

  desc: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffffff",
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  cardsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 14,
    marginBottom: 25,
  },

  card: {
    width: "90%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    alignItems: "center",
  },

  cardLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },

  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  btn: {
    marginTop: 10,
    backgroundColor: "#e7c427ff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
  },

  btnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
