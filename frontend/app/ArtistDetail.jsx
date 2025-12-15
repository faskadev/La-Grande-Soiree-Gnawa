import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../services/instance";

const fetchArtist = async (id) => {
  const res = await instance.get(`/artists/${id}`);
  return res.data;
};

export default function ArtistDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { artistId } = route.params;

  const { data: artist, isLoading } = useQuery({
    queryKey: ["artist", artistId],
    queryFn: () => fetchArtist(artistId),
  });

  if (isLoading || !artist) {
    return (
      <View style={styles.center}>
        <Text>Loading artist...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: artist.photoUrl }} style={styles.photo} />

      <Text style={styles.name}>{artist.name}</Text>
      <Text style={styles.role}>{artist.genre}</Text>

      <Text style={styles.section}>Performance Time</Text>
      <Text style={styles.time}>{artist?.performanceTime || "—"}</Text>

      <Text style={styles.section}>Biography</Text>
      <Text style={styles.desc}>{artist.bio}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("BookingForm", { artist })}
      >
        <Text style={styles.btnText}>Réserver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",

  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: 450,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    margin: 15,
    color: "#e7c427ff",
  },
  role: {
    fontSize: 16,
    marginHorizontal: 15,
    color: "#666",
  },
  section: {
    marginTop: 20,
    marginHorizontal: 15,
    fontSize: 19,
    fontWeight: "600",
  },
  desc: {
    margin: 15,
    fontSize: 20,
    color: "#444",
  },
  time: {
    marginHorizontal: 15,
    fontSize: 20,
    color: "#e7c427ff",
    fontWeight: "600",
  },
  btn: {
    alignSelf: "center",
    backgroundColor: "#e7c427ff",
    padding: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 30,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
