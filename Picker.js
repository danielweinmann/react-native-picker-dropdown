import React, { Component } from 'react'
import ReactNative, { Platform, TouchableOpacity, Text, StyleSheet } from 'react-native'

class PickerItem extends Component {
  render() {
    return(
      <Text>Item</Text>
    )
  }
}

export default class Picker extends Component {
  static Item = PickerItem

  render() {
    if (Platform.OS === 'ios') {
      const { style, selectedValue } = this.props
      const flatStyle = StyleSheet.flatten(style)
      const textStyle = {
        fontSize: 12,
        lineHeight: (style && flatStyle.height ? flatStyle.height : 12),
      }
      return(
        <TouchableOpacity style={{
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 6,
        }}>
          <Text style={[{
            flex: 1,
          }, textStyle, style]}>
            {selectedValue}
          </Text>
          <Text style={[textStyle, style, {color: 'black'}]}>▼</Text>
        </TouchableOpacity>
      )
    } else {
      return(<ReactNative.Picker {...this.props} />)
    }
  }
}
