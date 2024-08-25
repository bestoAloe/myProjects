import React, { useEffect, useRef } from 'react'
import { Animated, TouchableOpacity} from 'react-native'

const ShakingCtn = ({ children, containerStyle, isShake }) => {
  const shakeAnimationX = useRef(new Animated.Value(0)).current
  const shakeAnimationY = useRef(new Animated.Value(0)).current
  const rotationAnimation = useRef(new Animated.Value(-1)).current;

  const shakeAnimationXRef = useRef(null)
  const shakeAnimationYRef = useRef(null)
  const rotationAnimationRef = useRef(null)

  const resetAnimations = () => {
    Animated.spring(shakeAnimationX, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    Animated.spring(shakeAnimationY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    Animated.spring(rotationAnimation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const startRotationAnimation = () => {
    rotationAnimationRef.current.start()
  }

  const pauseRotationAnimation = () => {
    rotationAnimationRef.current.stop()
  }

  const startShakeAnimation = () => {
    shakeAnimationXRef.current.start()
    shakeAnimationYRef.current.start()
  }

  const pauseShakeAnimation = () => {
    shakeAnimationXRef.current.stop()
    shakeAnimationYRef.current.stop()
  }

  shakeAnimationXRef.current = Animated.loop(
    Animated.sequence([
      Animated.timing(shakeAnimationX, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimationX, { toValue: -1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimationX, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimationX, { toValue: 0, duration: 100, useNativeDriver: true }),
    ])
  )

  shakeAnimationYRef.current = Animated.loop(
    Animated.sequence([
      Animated.timing(shakeAnimationY, { toValue: -1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimationY, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimationY, { toValue: -1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimationY, { toValue: 0, duration: 100, useNativeDriver: true }),
    ])
  )

  rotationAnimationRef.current = Animated.loop(
    Animated.sequence([
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        easing: Animated.linear,
      }),
      Animated.timing(rotationAnimation, {
        toValue: -1,
        duration: 100,
        useNativeDriver: true,
        easing: Animated.linear,
      })
    ])
  )

  useEffect(() => {
    if(isShake){
      startRotationAnimation()
      startShakeAnimation()
    }
    else{
      pauseRotationAnimation()
      pauseShakeAnimation()
      resetAnimations()
    }
  }, [])

  useEffect(() => {
    if(isShake){
      startRotationAnimation()
      startShakeAnimation()
    }
    else{
      pauseRotationAnimation()
      pauseShakeAnimation()
      resetAnimations()
    }
  }, [isShake])

  const animatedStyle = {
    transform: [
      { translateX: shakeAnimationX },
      { translateY: shakeAnimationY },
      {
        rotate: rotationAnimation.interpolate({
          inputRange: [-1, 1],
          outputRange: ['-3deg', '3deg'],
        }),
      },
    ],
  }

  return (
    <Animated.View style={[animatedStyle, containerStyle]}>
      {children}
    </Animated.View>
  )
}

export default ShakingCtn