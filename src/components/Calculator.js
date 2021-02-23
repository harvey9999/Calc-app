import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Display from './calculator/Display'
import Buttons from './calculator/Buttons'
import colors from './calculator/colors'

export default class App extends Component {

  state = {
    display: '',
    result: '0'
  }

  handleOperation = operation => {
    // if (operation === '0' ) {}
    if (operation === 'C') {
      this.setState({
        display: '',
        result: '0'
      })
    }
    else if(operation === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }
    else if(operation === 'DEL') {
      this.setState({
        display: this.state.result.slice(0, -1),
        result: this.state.result.slice(0, -1)
      })
      // if (this.state.result.length === 1) {
      //   this.setState({
      //     display: '0',
      //     result: '0'
      //   })
      // }
    }
    else {
      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')
        //
        // fixedOperation = fixedOperation.split('DEL').join('')

        result = new String(eval(fixedOperation)).toString()

      }catch(e) {}
      this.setState({
        display,
        result
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <Buttons operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: colors.darker,
    // minHeight: '100%',
    maxWidth: '150%',
    minWidth: '150%'
  },
});
