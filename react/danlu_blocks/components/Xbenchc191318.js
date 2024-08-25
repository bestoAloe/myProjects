import React from 'react'
import { View, Dimensions } from 'react-native'
import { PinchGestureHandler, PanGestureHandler } from 'react-native-gesture-handler'

const baseWidth = Dimensions.get('window').width
const pm = (number) => (number ? (parseFloat(number) / 320) * baseWidth : 0)

const Component = ({ children, onPinchEvent, onPanEvent }) => {
  function handlePinchEvent(e) {
    onPinchEvent && onPinchEvent(e.nativeEvent)
  }

  function handlePanEvent(e) {
    onPanEvent && onPanEvent(e.nativeEvent)
  }

  return (
    <View>
      <PanGestureHandler minPointers={1} maxPointers={1} activeOffsetX={[-10, 10]} activeOffsetY={[-10,10]} onGestureEvent={handlePanEvent}>
        <PinchGestureHandler onGestureEvent={handlePinchEvent}>{children}</PinchGestureHandler>
      </PanGestureHandler>
    </View>
  )
}

export default Component