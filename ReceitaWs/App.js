import React, { useState, useCallback, useEffect } from 'react'
import * as Font from 'expo-font';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import ScreenStack from './Screens/ScreenStack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'AbrilFatFace': require('./assets/fonts/AbrilFatface-Regular.ttf'),
          'Philosopher-Bold': require('./assets/fonts/Philosopher-Bold.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 20));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View flex={1} onLayout={onLayoutRootView}>
      {ScreenStack()}
    </View>
  );
}