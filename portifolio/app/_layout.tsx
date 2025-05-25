import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{headerShown: false,
          animation: "fade", 
          gestureEnabled: true,
        }}/>
      <StatusBar style="auto" />
    </>
  );
}