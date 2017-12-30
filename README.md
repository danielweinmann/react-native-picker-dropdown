# react-native-picker-dropdown
A dropdown that uses React Native's Picker for Android and ActionSheetIOS for iOS

## Installation

```yarn add react-native-picker-dropdown```

or

```npm install react-native-picker-dropdown --save```

## Usage

It uses the exact same API as [React Native's Picker](https://facebook.github.io/react-native/docs/picker.html), but it shows a dropdown for iOS that opens an ActionSheetIOS with the items when clicked.

The only exception is that we have 2 style props:

1. `textStyle`: used to customize the text and the arrow icon of the Picker. On Android, the arrow icon does not change and other styles are also not applied due to limitations on React Native's `Picker` component.

2. `style`: used to customize a view that we put around the picker. 

## Examples

### Simplest example

[Run this example on Expo](https://exp.host/@danielweinmann/react-native-picker-dropdown-simplest)

[Read the source code](examples/simplest/App.js)

## Contributing

Please create issues and send pull requests!

## License

[MIT](LICENSE)
