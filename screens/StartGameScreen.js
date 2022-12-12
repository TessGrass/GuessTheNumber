import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'
import Colors from '../constants/colors'

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function enteredNumberHandler(number) {
        setEnteredNumber(number)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function startGameHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
      Alert.alert(
      'Invalid number!',
      'Number has to be a number between 1 and 99.',
      [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
      return
    }
      onPickNumber(chosenNumber)
  }
    return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <Card>
        <InstructionText>Input a Number</InstructionText>
          <TextInput
                value={enteredNumber}
                onChangeText={enteredNumberHandler}
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none">
          </TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={startGameHandler}>Start</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
    )
}
export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      marginTop: 100,
      alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
      flexDirection: "row",
    },

    buttonContainer: {
      flex: 1,
    }

})