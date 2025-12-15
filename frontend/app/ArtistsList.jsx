import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
  Alert,
  Share,
} from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { instance } from "../services/instance";

const CACHE_KEY = "artists_cache_v1";

const fetchArtists = async () => {
  const res = await instance.get("/artists");
  return res.data;
};

export default function ArtistsList() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // React Query: get artists
  const {
    data: artists,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
    // keep data while refetching, short stale time
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: 1,
    onSuccess: async (data) => {
      // cache to AsyncStorage for offline fallback
      try {
        await AsyncStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ ts: Date.now(), data })
        );
      } catch (e) {
        // silently ignore storage error
        console.warn("Failed saving artists cache", e?.message ?? e);
      }
    },
  });

  // Offline fallback: load cached artists if network fails
  useEffect(() => {
    if (isError) {
      (async () => {
        try {
          const raw = await AsyncStorage.getItem(CACHE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            // populate react-query cache so UI reads from it
            queryClient.setQueryData(["artists"], parsed.data);
          }
        } catch (e) {
          console.warn("Failed reading artists cache", e?.message ?? e);
        }
      })();
    }
  }, [isError]);

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await refetch();
    } catch (e) {
      // refetch will surface errors via isError
      console.warn("Refresh failed", e?.message ?? e);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const openArtist = (artist) => {
    // navigate to ArtistDetail screen
    navigation.navigate("ArtistDetail", { artistId: artist.id });
  };

  const onShareArtist = async (artist) => {
    try {
      const link = `myapp://artists/${artist.id}`;
      const message = `${artist.name} — ${
        artist.genre ?? "Gnawa"
      }\nSee details & book: ${link}`;
      await Share.share({ message });
    } catch (err) {
      Alert.alert("Share failed", (err && err.message) || "Unable to share");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => openArtist(item)}>
        <Image
          source={
            item.photoUrl
              ? { uri: item.photoUrl }
              : require("../assets/placeholder.gif")
          }
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.sub}>
            {item.genre ?? "Maestro Gnawa"}
          </Text>
          {item.performanceTime ? (
            <Text style={styles.time}>{item.performanceTime}</Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => onShareArtist(item)}
        >
          <Text style={styles.shareText}>Detail</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  if (isLoading && !artists) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 12 }}>Loading artists...</Text>
      </View>
    );
  }

  if (isError && !artists) {
    return (
      <View style={styles.center}>
        <Text style={{ marginBottom: 8 }}>Failed to load artists.</Text>
        <TouchableOpacity onPress={() => refetch()} style={styles.retryBtn}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ImageBackground
    source={require("../assets/images/background.png")}
    style={styles.bg}
    resizeMode="cover">
    <View style={styles.container}>
      <FlatList
        data={artists || []}
        keyExtractor={(i) => String(i.id)}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 12 }}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListEmptyComponent={() => (
          <View style={styles.center}>
            <Text>No artists yet.</Text>
          </View>
        )}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddc5c5ff",
    marginTop: 10,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderRadius: 20,
    borderColor: "#e7c427ff",
    borderWidth: 2,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  bg: {
    width: "100%",
    flex: 1,
    paddingBottom: 40,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  sub: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  time: {
    marginTop: 6,
    fontSize: 12,
    color: "#444",
  },
  shareButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: "#e7c427ff",
    borderColor: "#e7c427ff",
  },
  shareText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  retryBtn: {
    backgroundColor: "#111",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  retryText: {
    color: "#fff",
  },
});
