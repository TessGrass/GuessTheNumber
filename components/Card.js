import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

function Card ({ children }) {
  return (
    <View style={styles.cardContainer}>
     {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginVertical: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})