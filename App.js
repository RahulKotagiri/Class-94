import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Component } from 'react-native';

export default class calculator extends React.Component {
  constructor(){
    super();
    this.state = {
      numberBox1: "",
      numberBox2: "",
      result: ""
    }
  }



  Multiply = () => {

    this.setState({
      result: this.state.numberBox1*this.state.numberBox2
    })
    
  }

  Add = () => {
    
    var a = parseInt(this.state.numberBox1)
    var b = parseInt(this.state.numberBox2) 

    this.setState({
      result: a+b
    })

  }

  Subtract = () => {
    this.setState({
      result: this.state.numberBox1-this.state.numberBox2
    })
  }

  Divide = () => {
    this.setState({
      result: this.state.numberBox1/this.state.numberBox2
    })
  }


  render(){
    return(
      <View>

        <TextInput placeholder = "Enter 1st number here"
        style = {styles.calculatingNumber1} 
        onChangeText={(text)=>{
          this.setState({
            numberBox1: text
          })
        }
        }>

        </TextInput>

        <TextInput placeholder = "Enter 2nd number here"
        style = {styles.calculatingNumber2}
        onChangeText={(text)=>{
          this.setState({
            numberBox2: text
          })
        }}>

        </TextInput>
        
        <TouchableOpacity style = {styles.add} onPress = {()=>{
          this.Add()
        }}>
          <Text style = {{fontSize: 25}}> 
            Add 
          </Text>
        </TouchableOpacity>
        

        <TouchableOpacity style = {styles.subtract} onPress = {()=>{
          this.Subtract()
        }}>
          <Text style = {{fontSize: 25}}> 
            Subtract 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.multiply} onPress = {()=>{
          this.Multiply()
        }}>
          <Text style = {{fontSize: 25}}> 
            Multiply 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.divide} onPress = {()=>{
          this.Divide()
        }}>
          <Text style = {{fontSize: 25}}> 
            Divide 
          </Text>
        </TouchableOpacity>

        <Text style = {styles.output}>
          {this.state.result}
        </Text>

        <Text style = {styles.header}>
          Calculator App
        </Text>
                

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatingNumber1: {
    width: 250,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 250,
    fontSize: 25,
    color: "#0384fc",
    
  },
  calculatingNumber2: {
    width: 260,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    fontSize: 25,
    color: "#0384fc",
    
  },
  add: {
    width: 125,
    height: 75,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 350,
    marginLeft: 350,

    
  },
  subtract: {
    width: 125,
    height: 75,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: -75,
    marginLeft: 700,
    
  },
  multiply: {
    width: 125,
    height: 75,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: -75,
    marginLeft: 1050,
    
  },
  divide: {
    width: 125,
    height: 75,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    marginTop: -75,
    marginLeft: 1400,
    
  },
  output: {
    width: 125,
    height: 75,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    marginLeft: 880,
    marginTop: -250,
    fontSize: 25,
    alignItems: "center",
    color: "#85ff9d",
    fontWeight: "bold"
  },
  header: {
    fontSize: 35,
    textAlign: "center",
    marginTop: -500,
    color: "#0384fc"
  },

  keypad: {
    
  }
});

// var student = {
//   name: "Rahul",
//   grade: 10
// }
