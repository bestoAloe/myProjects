import React, { useRef, useState } from 'react'
import { Animated, View, StyleSheet, PanResponder, Dimensions } from 'react-native'

const baseWidth = Dimensions.get("window").width;
const pm = (number) => (number ? (parseFloat(number) / 320) * baseWidth : 0);

const Component = ({ children, offset }) => {
  const pan = useRef(new Animated.Value(0)).current
  const mode = useRef("center")
  const busy = useRef(false)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        if(busy.current){
          return
        }
        if(Math.abs(gesture.dx) > 40){
          busy.current = true
          console.log("繁忙检测", busy.current)
        }
        console.log("处理偏移", busy.current)
        if(gesture.dx > 40 && mode.current === 'left'){
          handleRight()
          mode.current = "center"
        }else if(gesture.dx < -40 && mode.current === 'center'){
          handleLeft()
          mode.current = "left"
        }
      },
      onPanResponderRelease: () => {
        busy.current = false
        console.log("手指离开释放")
        console.log("pan", pan)
      },
    })
  ).current

  function handleLeft(){
    console.log("向左滑动");
    Animated.timing(pan, {
      toValue: -offset,
      duration: 300,
      useNativeDriver: true
    }).start(()=>{
      pan.extractOffset();
      pan.setValue(0);
    })
  }

  function handleRight(){
    console.log("向右滑动")
    Animated.timing(pan, {
      toValue: offset,
      duration: 300,
      useNativeDriver: true
    }).start(()=>{
      pan.extractOffset();
      pan.setValue(0);
    })
  }

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ translateX: pan }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box}>
          {children}
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {},
})

export default Component
