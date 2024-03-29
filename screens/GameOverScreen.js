import { Text, View, Image, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import Title from "../components/Title"
import Colors from "../constants/colors"

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.gameOverRootContainer}>
        <Title>game over!</Title>
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')} />
        </View>
          <Text 
            style={styles.summaryText}>
              Your phone needed<Text style={styles.highlightText}> { roundsNumber } </Text>
              rounds to guess the number
              <Text style={styles.highlightText}> {userNumber}</Text>
          </Text>
        <PrimaryButton onPressed={onStartNewGame}>Start New Game</PrimaryButton>
    </View>   
  )
}
export default GameOverScreen

const styles = StyleSheet.create({

  gameOverRootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
})