import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, db } from "./firebaseconfig"; 

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      console.error("Please fill all fields");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), { 
        name,
        email,
        createdAt: new Date().toISOString(), 
      });

      console.log("Account created successfully!");
      router.replace("./Login"); 
    } catch (error: any) {
      console.error("Registration Error:", error.code, error.message);
      if (error.code === 'auth/email-already-in-use') {
         alert("That email address is already in use!");
      } else {
         alert("Registration failed: " + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Account</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Link href="./Login" style={styles.linkText}>
        Already have an account? Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 30, 
    backgroundColor: "#f9f9f9" 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#1c1c1e',
  },
  input: { 
    width: "100%", 
    height: 50, 
    borderWidth: 1, 
    borderColor: "#e0e0e0", 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    marginBottom: 15, 
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  button: { 
    backgroundColor: "#007AFF", // iOS Blue for clean look
    height: 50, 
    borderRadius: 12, 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 20, 
    marginBottom: 20,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "700" 
  },
  linkText: { 
    color: "#007AFF", 
    fontSize: 16, 
    textAlign: "center",
    marginTop: 10,
  },
});