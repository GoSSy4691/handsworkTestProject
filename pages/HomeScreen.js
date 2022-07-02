import { ActivityIndicator, FlatList, Text, View, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import React, { useState } from "react";

import styles from "../src/styles";

const HomeScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.github.com/events");
      const json = await response.json();
      const getOnly = 20;
      const cutList = json.slice(0, getOnly);
      dispatch({ type: "LOAD_LIST", payload: cutList });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      !props.list.length && getData();
      const interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
      return () => clearInterval(interval);
    }, [!props.list.length])
  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.countdownText}>auto update: {props.countdown}</Text>
          <View style={styles.container}>
            <Text style={styles.countdownText}>activate button after: {props.updateListAfter}</Text>
            <Button
              title="Update list"
              onPress={() => dispatch({ type: "CLEAN_LIST" })}
              disabled={!!props.updateListAfter}
            />
          </View>
          <FlatList
            style={styles.flatList}
            data={props.list}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.activeElement}>
                <Text
                  style={styles.elementText}
                  onPress={() => {
                    props.navigation.navigate("Details", { item });
                    dispatch({ type: "CLEAN_LIST" });
                  }}
                >
                  {item.id} - {item.type}
                </Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { list, countdown, updateListAfter } = state;
  return { list, countdown, updateListAfter };
};

export default connect(mapStateToProps)(HomeScreen);
