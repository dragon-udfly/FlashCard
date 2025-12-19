import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { movies } from "../../assets/data/movies";

const { height } = Dimensions.get("window");

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const movie = movies.find((m) => m.id.toString() === id);

  const [rating, setRating] = useState(0);

  // Load saved rating
  useEffect(() => {
    const loadRating = async () => {
      const saved = await AsyncStorage.getItem(`rating-${movie?.id}`);
      if (saved) setRating(Number(saved));
    };
    if (movie) loadRating();
  }, [movie]);

  // Save rating
 const handleRating = async (value: number) => {
  setRating(value);
  await AsyncStorage.setItem(`rating-${movie.id}`, value.toString());
};


  if (!movie) {
    return (
      <View style={styles.notFound}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Movie not found.</Text>
      </View>
    );
  }

  // Save movie to Recently Viewed
useEffect(() => {
  const addToRecentlyViewed = async () => {
    if (!movie) return;

    try {
      const stored = await AsyncStorage.getItem("recentlyViewed");
      let recent: number[] = stored ? JSON.parse(stored) : [];

      // Remove current movie if already exists
      recent = recent.filter((m) => m !== movie.id);

      // Add current movie at the front
      recent.unshift(movie.id);

      // Keep only last 10
      if (recent.length > 10) recent = recent.slice(0, 10);

      await AsyncStorage.setItem("recentlyViewed", JSON.stringify(recent));
    } catch (e) {
      console.log("Error saving recently viewed:", e);
    }
  };

  addToRecentlyViewed();
}, [movie]);


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={{ color: "#fff", fontSize: 18 }}>← Back</Text>
      </TouchableOpacity>

      <Image source={movie.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.description}>{movie.description}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Cast:</Text>
          <Text style={styles.value}>{movie.cast}</Text>

          <Text style={styles.label}>Genre:</Text>
          <Text style={styles.value}>{movie.genre}</Text>

          <Text style={styles.label}>Release Date:</Text>
          <Text style={styles.value}>{movie.releaseDate}</Text>
        </View>

        {/* ⭐ Rating Section */}
        <View style={{ marginTop: 25 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 10,
              fontWeight: "600",
              textAlign : "center",
            }}
          >
            Rate this movie
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleRating(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={32}
                color="#fbbf24"
                style={{ marginHorizontal: 5 }} // spacing between stars
              />
            </TouchableOpacity>
          ))}
        </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: height * 0.5,
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  infoBox: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 15,
  },
  label: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 10,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
});
