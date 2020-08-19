import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import api from "./services/api";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories").then((resp) => {
      if (resp.status === 200) {
        setRepositories(resp.data);
      }
    });
  }, []);

  async function handleLikeRepository(id) {
    const resp = await api.post(`repositories/${id}/like`);

    if (resp.data) {
      setRepositories([
        ...repositories.filter((repo) => repo.id !== id),
        resp.data,
      ]);
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <View style={styles.repositoryContainer}>
<<<<<<< HEAD
          <Text style={styles.repository}>Repository 1</Text>

          <View style={styles.techsContainer}>
            <Text style={styles.tech}>ReactJS</Text>
            <Text style={styles.tech}>Node.js</Text>
          </View>
=======
          {repositories.map((item) => (
            <View key={item.id}>
              <Text style={styles.repository}>{item.title}</Text>
              <View style={styles.techsContainer}>
                {item.techs.map((tech, index) => (
                  <Text key={index} style={styles.tech}>
                    {tech}
                  </Text>
                ))}
              </View>
>>>>>>> 81484f8... Added map() to list repository's techs

          <View style={styles.likesContainer}>
            <Text
              style={styles.likeText}
              // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
              testID={`repository-likes-1`}
            >
              3 curtidas
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLikeRepository(1)}
            // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
            testID={`like-button-1`}
          >
            <Text style={styles.buttonText}>Curtir</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});
