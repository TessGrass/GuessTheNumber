import { View, Text, Pressable, StyleSheet } from "react-native"
import Colors from '../constants/colors'

function PrimaryButton({ children, onPressed }) { // this is destruction, you could also write props and then write props.children in the text element.

    return (
      <View style={styles.buttonOuterContainer}>
        <Pressable 
          style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
          onPress={onPressed} // onPress is a prop in the <Pressable> component. OnPress points to a method (confirmInputHandler) found in StartGameScreen file.
          android_ripple={{ color: Colors.primary600 }}>
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    )
}
export default PrimaryButton

const styles = StyleSheet.create({

  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden'
  },

  buttonInnerContainer: {
    borderRadius: 28,
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
pressed: {
  opacity: 0.75
}

})

// onPress is a prop and is found on the onPress in the <Pressable> component. OnPress points to a method (confirmInputHandler) found in StartGameScreen file.