import React from "react";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function CalendarLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.contentStyle,
        animation: "slide_from_right",
      }}
    />
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
});
