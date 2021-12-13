import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

class Botao extends Component{

  constructor(props) {
    super(props);
    this.state={};

    let c = 1;
    if(props.c) {
      c=parseInt(props.c);
    }

    let bg = '#E0E0E0';
    if(props.bg) {
      bg = props.bg
    }

    this.styles = StyleSheet.create({
      area:{
        flex:c,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:"#999999",
        backgroundColor:bg
      }, 
      text:{
        fontSize:18,
        fontWeight:'bold'
      }
    });
  }


  render() {
    return (
      <TouchableOpacity style={this.styles.area} >
        <Text style={this.styles.text} >{this.props.n}</Text>
      </TouchableOpacity>
    );
  }
}


export default class AppCalculadora extends Component {

  render() {
    return (
      <View style={styles.body} >
        <View style={styles.linha} >
            <Text></Text>
          </View>
          <View style={styles.linha} >
            <Botao c="3" n="C" bg='#CCCCCC' />
            <Botao n="/" bg='#FD9526' />
          </View>
          <View style={styles.linha} >
            <Botao n="7" />
            <Botao n="8" />
            <Botao n="9" />
            <Botao n="*" bg='#FD9526' />
          </View>
          <View style={styles.linha} >
            <Botao n="4" />
            <Botao n="5" />
            <Botao n="6" />
            <Botao n="-" bg='#FD9526' />
          </View>
          <View style={styles.linha} >
            <Botao n="1" />
            <Botao n="2" />
            <Botao n="3" />
            <Botao n="+" bg='#FD9526' />
          </View>
          <View style={styles.linha} >
            <Botao c="2" n="0" />
            <Botao n="." />
            <Botao n="=" bg='#FD9526' />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20, 
    flex:1
  },
  linha:{
    flex:1,
    flexDirection:'row'
  }
});