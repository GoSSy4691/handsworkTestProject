import { Text } from "react-native";
import React from "react";

import styles from "../src/styles";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <>
      <Text style={styles.elementText}>id: {item.id}</Text>
      <Text style={styles.elementText}>type: {item.type}</Text>
      <Text style={styles.elementText}>public: {item.public.toString()}</Text>
      <Text style={styles.elementText}>created_at: {item.created_at}</Text>
      <Text style={styles.elementText}>login: {item.actor.login}</Text>
      <Text style={styles.title}>url: </Text>
      <Text style={styles.elementText}>{item.actor.url}</Text>
    </>
  );
};

export default DetailsScreen;
