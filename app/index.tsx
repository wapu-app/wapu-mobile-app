import {WebView} from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <WebView
        style={styles.container}
        source={{ uri: 'https://my.wapu.app' }}
      />
      
    </>
  );
}
