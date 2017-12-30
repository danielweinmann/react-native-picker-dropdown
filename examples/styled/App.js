import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker } from 'react-native-picker-dropdown'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { language: 'js'  }
    this.onValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(language) {
    this.setState({ language })
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          prompt="Choose your favorite language"
          style={styles.picker}
          textStyle={styles.pickerText}
          cancel
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Ruby" value="ruby" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Elm" value="elm" />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    alignSelf: 'stretch',
    backgroundColor: 'cadetblue',
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 20,
    borderRadius: 10,
  },
  pickerText: {
    color: 'white',
  }
})
