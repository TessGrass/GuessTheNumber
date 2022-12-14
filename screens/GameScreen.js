import { useState, useEffect } from 'react'
import { View, StyleSheet, Alert, ScrollView, Flatlist } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import InstructionText from '../components/InstructionText'
import GuessLogItem from '../components/GuessLogItem'
import Card from '../components/Card'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minNum = 1
let maxNum = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber) // Hardcoded min / max due to useEffect technically being executed after the function and therefor, when minNum and maxNum is equal (which is when the guess is correct), you'll end up in a maximal call stack.
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  console.log(guessRounds.length)

  useEffect(() => {
    if (currentGuess === userNumber) {
      const roundLength = guessRounds.length
      onGameOver(roundLength)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => { // the empty array dependency ensures that the function only executes when GameScreen is rendered, not when it's just being updated. This will set the min /max to initial values.
    minNum = 1,
    maxNum = 100
  }, [])

  function nextGuessHandler(direction) {
    if ( // checking which direction is set by the user. Otherwise there is a risk for maximal call stack / infinity loop if the user sets the incorrect direction.
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie!', 'You know that this direction is wrong...',
      [{ text: 'Sorry!', style: 'cancel' }])
      return
    }
    if (direction === 'lower') {
      maxNum = currentGuess
    } else {
      minNum = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minNum, maxNum, currentGuess)
   
    setCurrentGuess(newRndNumber)
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length
  console.log('guess:' + guessRoundsListLength)


  return (
    <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or lower
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style= {styles.buttonContainer}>
                <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
                  <Ionicons name='md-remove' size={24} color='white' />
                </PrimaryButton>
            </View>
            <View style= {styles.buttonContainer}>
                <PrimaryButton onPressed={nextGuessHandler.bind(this, 'higher')}>
                  <Ionicons name='md-add' size={24} color='white' />
                </PrimaryButton>
            </View>
          </View>
        </Card>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View>
      {guessRounds.map(guessRound => <GuessLogItem guess={guessRound} key={guessRound}>{guessRound}</GuessLogItem>)}
      </View>
      </ScrollView>
    </View>
  )
}
export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})
