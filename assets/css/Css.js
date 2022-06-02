import {StyleSheet} from "react-native";

const css = StyleSheet.create({
  
  container2: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button__home:{
      marginRight: 40
  },
  darkbg:{
    backgroundColor:"rgba(35, 56, 87, 0.99)"
  },
  login__logomarca:{
      marginBottom: 10
  },
  login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginBottom: 15,
      display: text
  }),
  login__form:{
      width: "80%"
  },
  login__input:{
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15
  },
  login__button:{
      padding: 12,
      backgroundColor: "rgba(0, 111, 209, 0.8)",
      alignSelf:"center",
      borderRadius:5
  },
  login__buttonText:{
      fontWeight:"bold",
      fontSize: 22,
      color:"#333"
  },
  area__tab: {
    backgroundColor: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  }
});

export {css};