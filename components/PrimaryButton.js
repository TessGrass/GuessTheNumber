import { View, Text } from 'react-native'

function PrimaryButton({children}) {
  return (
  <View>
    <Text>
      {children}
    </Text>
  </View>
  )
}

export default PrimaryButton

// onPress is a prop and is found on the onPress in the <Pressable> component. OnPress points to a method (confirmInputHandler) found in StartGameScreen file.