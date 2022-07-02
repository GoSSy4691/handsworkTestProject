import { Text } from "react-native";
import React from "react";

import styles from "../src/styles";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <>
      <Text style={styles.item}>id: {item.id}</Text>
      <Text style={styles.item}>type: {item.type}</Text>
      <Text style={styles.item}>public: {item.public.toString()}</Text>
      <Text style={styles.item}>created_at: {item.created_at}</Text>
      <Text style={styles.item}>login: {item.actor.login}</Text>
      <Text style={styles.title}>url: </Text>
      <Text style={styles.item}>{item.actor.url}</Text>
    </>
  );
};

export default DetailsScreen;
