import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          404 - Page Not Found
        </ThemedText>
        <ThemedText style={styles.message}>
          The page you're looking for doesn't exist or has been moved.
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" style={styles.linkText}>
            Go to Home Screen
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF7F',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#00FF7F',
    borderRadius: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121212',
  },
});
