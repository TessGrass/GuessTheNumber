import { StyleSheet , ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useState } from 'react'
import { useFonts } from 'expo-font'

import AppLoading from 'expo-app-loading'
/* import * as SplashScreen from 'expo-splash-screen'; */
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
 
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }
 
  function gameOverHandler(rounds) {
    setGameIsOver(true)
    setGuessRounds(rounds)
   
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} /> // onPickNumber = "bridge between the components", pickedNumberHandler ="where to"

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}></GameOverScreen>
  }

  // safeAreaView makes sure that there is a distance between the top edge / nodge and the content
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/dices.png')} 
      resizeMode="cover" 
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 rootScreen: {
   flex: 1,
 },
 backgroundImage: {
   opacity: 0.2
 }

});