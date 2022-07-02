import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import styles from "../src/styles";

const HomeScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await fetch("https://api.github.com/events");
      const json = await response.json();
      const getOnly = 20;
      const cutList = json.slice(0, getOnly);
      dispatch({ type: "LOAD_DATA", payload: cutList });
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
          data={props.list}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => props.navigation.navigate("Details", { item })}
            >
              {item.id} - {item.type}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};

export default connect(mapStateToProps)(HomeScreen);
