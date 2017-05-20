# react-native-picker-dropdown
A dropdown that uses React Native's Picker for Android and ActionSheetIOS for iOS

## Installation

```yarn add react-native-picker-dropdown```

or

```npm install react-native-picker-dropdown --save```

## Example

It uses the exact same API as [React Native's Picker](https://facebook.github.io/react-native/docs/picker.html), but it shows a dropdown for iOS that opens an ActionSheetIOS with the items when clicked.

```js
import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker } from 'react-native-picker-dropdown'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { language: "js"  }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      }}>
        <View style={{
          backgroundColor: 'white',
          alignSelf: 'stretch',
          margin: 20,
        }}>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(language) => this.setState({language})}
            mode="modal"
            style={{
              alignSelf: 'stretch',
              color: 'black',
            }}
          >
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Ruby" value="ruby" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="Elm" value="elm" />
          </Picker>
        </View>
      </View>
    )
  }
}
```

## Contributing

Please create issues and send pull requests!

## License

[MIT](LICENSE)
