import * as React from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
var renderText = '';
export default class RandomNumForm extends React.Component{
  constructor(){
    super();
    this.state = {
      min:"",
      max:"",
      renderText: "",
      responseStyle:{}
    }
  }

  getRandomNum(){
    console.log('hi');
    try{
      min = this.state.min;
      console.log("here")
      min.trim();
      max = this.state.max;
      max.trim();
      console.log("here2");
      console.log("here6");
      if(parseInt(min) > parseInt(max)){
        console.log("here4");
        throw "Max less than Min";
      }
      else if(min == "" || max == ""){
        console.log("here5");
        throw "Enter something";
      }
      console.log("hello3");
      num = parseInt(min) + Math.floor(Math.random()*(parseInt(max)-parseInt(min)));
      console.log(num);
      this.setState({renderText: num, responseStyle: styles.text});
    }catch(error){
      console.log(error);
        this.setState({renderText: "Make sure you entered a valid input without letters or special characters and the max is greater than the min.", responseStyle: styles.error});

    }
    renderText = this.state.renderText;
  }
  render(){
    return(
      <View>
        <TextInput
        placeholder = "Min..."
        onChangeText = {text =>{
          this.setState({min: text});
        }}
        style = {styles.textBox}
        />
        <TextInput
        placeholder = "Max..."
        onChangeText = {text =>{
          this.setState({max: text});
        }}
        style = {styles.textBox}
        />
        <TouchableOpacity
        onPress = {()=>{
          this.getRandomNum();
        }}
        style = {styles.button}
        >
          <Text>Get</Text>
        </TouchableOpacity>
        <Text style = {this.state.responseStyle}>{this.state.renderText}</Text>
      </View>
    );
  }
}
styles = new StyleSheet.create({
  textBox: {
    backgroundColor: "#EEEEEE",
    alignSelf: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 20
  },
  button:{
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#53E306',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 60,
    marginTop: 15
  },
  text:{
    textAlign: 'center',
    color: '#FF0000',
    fontSize: 50
  },
  error:{
    textAlign: 'center',
    color: '#FF0000',
    fontWeight: 'bold'
  }
});
