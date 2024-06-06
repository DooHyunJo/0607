import { Stack } from "expo-router";

export default function CommunityLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Boards" options={{ headerShown: false }} />
      <Stack.Screen name="Detail" options={{ headerShown: false }} />
    </Stack>
  );
}
