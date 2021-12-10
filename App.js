import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

class Botao extends Component{

  constructor(props) {
    super(props);
    this.state={};

    this.styles = StyleSheet.create({
      area:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:"#999999",
        backgroundColor:'#E0E0E0'
      }, 
      text:{
        fontSize:18
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area} >
        <Text style={this.styles.text} ></Text>
      </TouchableOpacity>
    );
  }
}

export default class AppCalculadora extends Component {

  render() {
    return (
      <View style={styles.body} >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20
  }
});