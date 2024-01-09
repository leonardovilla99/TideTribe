import { useFonts } from 'expo-font';
import { SplashScreen, Stack, router } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
};
   

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Med' : require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Reg' : require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Semi' : require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
            <RootLayoutNav />
        </ClerkProvider>);
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const {isLoaded,isSignedIn} = useAuth();

  useEffect(() => {
    if(isLoaded && !isSignedIn){
        router.push("/(modals)/login")
    }
  }, [isLoaded])

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login" options={{
            presentation: 'modal',
            headerShown: false
        }}/>
        <Stack.Screen name="(modals)/register" options={{
            presentation: 'modal',
            headerShown: false
        }}/>
        <Stack.Screen name="listing/[id]" options={{
            headerShown: false
        }}/>
    </Stack>
  );
}
