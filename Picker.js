import React, { Component } from 'react'
import ReactNative, {
  Platform, View, TouchableOpacity, Text, StyleSheet, ActionSheetIOS
} from 'react-native'

export default class Picker extends Component {
  static Item = ReactNative.Picker.Item

  constructor(props, context) {
    super(props, context)
    this.onPress = this.handlePress.bind(this)
  }

  handlePress() {
    const { children, onValueChange, prompt } = this.props
    const labels = children.map(child => child.props.label)
    const values = children.map(child => child.props.value)
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: prompt,
        options: [...labels, "Cancel"],
        cancelButtonIndex: labels.length,
      },
      index => {
        if (index < labels.length) {
          onValueChange(values[index])
        }
      }
    )
  }

  render() {
    const { children, style, textStyle } = this.props
    const labels = children.map(child => child.props.label)
    const values = children.map(child => child.props.value)
    const flatStyle = (style ? StyleSheet.flatten(style) : {})

    if (Platform.OS === 'ios') {
      const { selectedValue } = this.props

      const defaultTextStyle = {
        fontSize: 12,
        lineHeight: (flatStyle.height ? flatStyle.height : 12),
      }

      return(
        <TouchableOpacity
          onPress={this.onPress}
          style={[{
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingHorizontal: 6,
          }, flatStyle]}
        >
          <Text
            style={[{ flex: 1 }, defaultTextStyle, textStyle]}
          >
            {labels[values.indexOf(selectedValue)]}
          </Text>
          <Text style={[{color: 'black'}, defaultTextStyle, textStyle]}>▼</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View
          style={[{
            alignSelf: 'stretch',
            paddingHorizontal: 6,
          }, flatStyle]}
        >
          <ReactNative.Picker
            {...this.props}
            style={textStyle}
          />
        </View>
      )
    }
  }
}
