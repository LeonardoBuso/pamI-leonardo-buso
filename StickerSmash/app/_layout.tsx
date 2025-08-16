import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
    <StatusBar style="light"/>
    <Stack>
        <Stack.Screen 
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
          name="not-found"
          options={{
            headerShown: false,
        }}
      />
    </Stack>
    </>
  );
}
