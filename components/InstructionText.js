import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

function InstructionText({ children, style }) {
  return (
      <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    color: Colors.accent500,
  },
})