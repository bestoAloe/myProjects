import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, PanResponder, Animated, TouchableOpacity, Dimensions, Image, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { XbenchcDwProxy } from '../../xbench/xbenchc/XbenchcDwProxy'
import XbenchcView from '../../xbench/xbenchc/components/XbenchcView'
const baseWidth = Dimensions.get('window').height
const pm = (number) => (number ? (parseFloat(number) / 750) * baseWidth : 0)
const duration = 1

const getStyle = (classNames) => (classNames || '').split(' ').filter(Boolean).map((className) => styles[className] || {})

const _xc = {
  h: React.createElement,
  f: React.Fragment,
  s: getStyle,
  XbenchcView
}

const dw = new XbenchcDwProxy({}, { _xc })

const ProgressBar = ({ currentProgress, onProgress, sprite, totalSeconds }) => {
  const [progress, setProgress] = useState(currentProgress || 0)
  const [width, setWidth] = useState(0)
  const [isTouch, setIstouch] = useState(false)
  const [markerPosition, setMarkerPosition] = useState(new Animated.Value(0))

  useEffect(() => {
    if(!isTouch){
      setProgress(currentProgress)
    }
  }, [currentProgress])

  useEffect(() => {
    Animated.timing(markerPosition, {
      toValue: (progress / 1) * width,
      duration: 0,
      useNativeDriver: false,
    }).start()
  }, [progress, duration, width])

  const displayCurrentTime = useMemo(()=>{
    const currentTime = Math.floor(totalSeconds * progress)

    const minutes = Math.floor(currentTime / 60)
    const seconds = currentTime % 60

    const minutesString = minutes.toFixed().padStart(2, '0')
    const secondsString = seconds.toFixed().padStart(2, '0')

    return `${minutesString}:${secondsString}`
  }, [totalSeconds, progress])

  const displayDuration = useMemo(()=>{
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60

    const minutesString = minutes.toFixed().padStart(2, '0')
    const secondsString = remainingSeconds.toFixed().padStart(2, '0')

    return `${minutesString}:${secondsString}`
  }, [totalSeconds])


  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if(!isTouch){
        setIstouch(true)
      }
      console.log('onPanResponderMove', gestureState.moveX)
      const dt = pm(18 + 33 + 45)
      let newProgress = ((gestureState.moveX - dt) / width) * duration
      console.log('newProgress', newProgress)
      if (newProgress < 0) {
        newProgress = 0
      } else if (newProgress > duration) {
        newProgress = duration
      }
      setProgress(newProgress)
    },
    onPanResponderRelease: () => {
      onProgress(progress)
      setIstouch(false)
    },
  })

  const progressBarWidth = (progress / duration) * width

  const pos = useMemo(()=>{
    function getIndexPosition(index) {
      // 计算索引所在的行号
      var row = Math.floor(index / 10)
  
      // 计算索引所在的列号
      var column = index % 10
  
      return { row, column }
    }
    const currentIndex = Math.floor(progress * 20)
    const { row, column } = getIndexPosition(currentIndex)
    return { row, column }

  }, [progress])

  // 雪碧图调试

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width)
      }}
      {...panResponder.panHandlers}
    >

      {
        isTouch && (
          <View
            style={{
              position: 'absolute',
              top: -pm(133),
              left: pm(239),
              width: pm(92),
              height: pm(69),
            }}
          >
            <View
              // 雪碧图
              style={{
                width: pm(92),
                height: pm(69),
                position: 'relative',
                overflow: 'hidden',
                borderTopLeftRadius: pm(4),
                borderTopRightRadius: pm(4),
                borderBottomLeftRadius: pm(4),
                borderBottomRightRadius: pm(4),
              }}
            >
              <Image
                src={dw.filters.qiniu(sprite)}
                style={{
                  position: 'absolute',
                  width: pm(920),
                  height: pm(690),
                  resizeMode: 'stretch',
                  left: -pos.column * pm(92),
                  top: -pos.row * pm(69),
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: pm(10),
              }}
            >
              <Text style={styles.spriteText}>{displayCurrentTime}</Text>
              <Text style={styles.spriteText}>{"丨"}</Text>
              <Text style={styles.spriteTextTotal}>{displayDuration}</Text>
            </View>
          </View>
        )
      }
      <View style={styles.greyBar} />
      <LinearGradient
        style={[styles.progressBar, { width: progressBarWidth }]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.0 }}
        colors={['rgba(255,209,66,0)', 'rgba(255,209,66,0.8)', '#FFFFFF']}
        locations={[0, 0.8, 1]}
      ></LinearGradient>
      <Animated.View
        style={[styles.marker, { transform: [{ translateX: markerPosition }] }]}
      >
        <View style={styles.markerInside}></View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: pm(10),
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  greyBar: {
    opacity: 0.21,
    position: 'absolute',
    width: '100%',
    height: pm(13),
    borderRadius: pm(1000),
    backgroundColor: '#FFFFFF',
  },
  progressBar: {
    borderRadius: pm(1000),
    position: 'absolute',
    height: pm(13),
  },
  marker: {
    position: 'absolute',
    top: pm(-2),
    left: pm(-8),
    width: pm(13),
    height: pm(13),
    borderRadius: pm(13),
    backgroundColor: '#FFFFFF',
    shadowColor: 'rbga(0, 0, 0, 0.2)',
    elevation: 4,
  },
  markerInside: {
    position: 'absolute',
    top: pm(3),
    left: pm(3),
    width: pm(7),
    height: pm(7),
    borderRadius: pm(1000),
    backgroundColor: '#FFD142',
  },
  spriteText: {
    fontSize: pm(13),
    height: pm(18),
    fontWeight: 500,
    color: "#FFFFFF",
  },
  spriteTextTotal: {
    fontSize: pm(13),
    height: pm(18),
    fontWeight: 500,
    color: "#C4C4C4"
  }
})

export default ProgressBar