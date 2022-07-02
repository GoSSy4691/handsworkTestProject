import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

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

  React.useEffect(() => {
    !props.list.length && getData();
    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(interval);
  }, [!props.list.length]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text>countdown: {props.countdown}</Text>
          <FlatList
            data={props.list}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text
                style={styles.item}
                onPress={() => {
                  props.navigation.navigate("Details", { item });
                  dispatch({ type: "CLEAN_LIST" });
                }}
              >
                {item.id} - {item.type}
              </Text>
            )}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { list, countdown } = state;
  return { list, countdown };
};

export default connect(mapStateToProps)(HomeScreen);
