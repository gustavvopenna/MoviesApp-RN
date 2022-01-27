import { StyleSheet } from "react-native";

export const pallete = {
  lightGray: '#F4F5F6'
}

export const globalStyles = StyleSheet.create({
  carouselTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginLeft: 10
  },
  title: {
    fontSize: 40,
    fontWeight: '700'
  },
  posterShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  }
})