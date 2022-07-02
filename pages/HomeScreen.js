import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "../src/styles";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://api.github.com/events");
      const json = await response.json();
      const getOnly = 20;
      setData(json.slice(0, getOnly));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.item} onPress={() => navigation.navigate("Details", { item })}>
              {item.id} - {item.type}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
