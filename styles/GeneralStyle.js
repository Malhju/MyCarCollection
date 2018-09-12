import {StyleSheet} from 'react-native';

const GeneralStyle = StyleSheet.create({
 
    mainContainer:
    {
        flex: 1,
    },

    containerTop:
    {
        flex: 10,
        flexDirection: "row",
        paddingTop: 3,
        // height: 40,
        // width: 400,

        // borderColor: 'gray',
        // borderWidth: 1,
        // // alignItems: 'center',
        // justifyContent: 'center',
    },
  
    containerMiddle: {
        flex: 75,
        // fontSize: 24,
        // fontWeight: 'bold'
    },

    subContainerMiddle:{
        flex: 35,
        flexDirection: 'row',
    },
  
    containerBottom: {
        flex: 15,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    secureBlock:
    {
        flex: 3,
        backgroundColor: "#4569E5",
    },
    
    button:
    {
        flex: 35,
        backgroundColor:"#4569E5"
    },

    reachImg: {
        flex: 15,
        backgroundColor: '#4569E5',
    },

    inputText:{
        flex: 65,
        backgroundColor: '#4569E5',
        // borderColor: 'white',
        // borderWidth: 1,
        color: 'white'
    },

    default: {
      color: 'white',
    },

    splashImage: {
    //   resizeMode: Image.resizeMode.contain,
      width: 300,
      height: 100,
      margin: 20,
    },

    splashTitle: {
      flex:1,
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    },

    top: {
      flex: 1,
      backgroundColor: '#cccccc'
    },

    imageCar: {
        flex: 35,
    //   resizeMode: Image.resizeMode.stretch,
    //   height: 10,
    //   width: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    showACarText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });

export default GeneralStyle;