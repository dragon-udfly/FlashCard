import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Layout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <StatusBar style="light" />

      {/* App Screens */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <View style={styles.footerItem}>
            <Ionicons name="home" size={22} color="#fff" />
            <Text style={styles.footerText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/favorites")}>
  <View style={styles.footerItem}>
    <Ionicons name="heart" size={22} color="#fff" />
    <Text style={styles.footerText}>Favorites</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => router.push("/profile")}>
  <View style={styles.footerItem}>
    <Ionicons name="person" size={22} color="#fff" />
    <Text style={styles.footerText}>Profile</Text>
  </View>
</TouchableOpacity>

      </View>
      <Text style={{ color: "#94a3b8", textAlign: "center", marginTop: 10 }}>
  Made by Dragon-Fly
</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1e293b",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 3,
  },
});
