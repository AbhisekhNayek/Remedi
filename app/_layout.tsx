import React from "react"; // Import React for JSX usage
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

export default function Layout() {
  return (
    <>
      {/* Status bar configuration */}
      <StatusBar style="light" />

      {/* Stack navigator configuration */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
          animation: "slide_from_right",
          navigationBarHidden: true,
        }}
      >
        {/* Define application screens */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="medications/add" options={{ headerShown: false }} />
        <Stack.Screen name="refills/index" options={{ headerShown: false }} />
        <Stack.Screen name="calendar/index" options={{ headerShown: false }} />
        <Stack.Screen name="history/index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
