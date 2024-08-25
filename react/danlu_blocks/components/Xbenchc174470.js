import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Animated, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const baseWidth = Dimensions.get("window").width;
const pm = (number) => (number ? (parseFloat(number) / 320) * baseWidth : 0);
const duration = 1
const ProgressBar = ({currentProgress, showSlider, onProgress }) => {
  const [progress, setProgress] = useState(currentProgress || 0);
  const [width, setWidth] = useState(0);
  const [markerPosition, setMarkerPosition] = useState(new Animated.Value(0));

  useEffect(() => {
    setProgress(currentProgress)
  }, [currentProgress]);

  useEffect(() => {
    Animated.timing(markerPosition, {
      toValue: progress / 1 * width,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [progress, duration, width]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      let newProgress = (gestureState.moveX / width) * duration;
      if (newProgress < 0) {
        newProgress = 0;
      } else if (newProgress > duration) {
        newProgress = duration;
      }
      setProgress(newProgress);
    },
    onPanResponderRelease: () => {
      onProgress(progress);
    },
  });

  const handlePress = event => {
    const { locationX } = event.nativeEvent;
    const newProgress = (locationX / width) * duration;
    setProgress(newProgress);
    onProgress(newProgress);
  };

  const progressBarWidth = progress / duration * width;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      onLayout={event => setWidth(event.nativeEvent.layout.width)}
      {...panResponder.panHandlers}
    >
      <View style={styles.greyBar} />
      <LinearGradient style={[styles.progressBar, {width: progressBarWidth}]}
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
        colors={["rgba(255,209,66,0)", "rgba(255,209,66,0.8)", "#FFFFFF"]}  locations={[0, 1, 1]}></LinearGradient>
      {showSlider && (
        <Animated.View
          style={[styles.marker, { transform: [{ translateX: markerPosition }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: pm(10),
    justifyContent: 'center',
    position: 'relative',
  },
  greyBar: {
    position: 'absolute',
    width: "100%",
    height: pm(3),
    borderRadius: pm(5),
    backgroundColor: '#353535',
  },
  progressBar: {
    height: pm(3),
    borderRadius: pm(5),
  },
  marker: {
    position: 'absolute',
    top: pm(-1),
    left: pm(-10),
    width: pm(10),
    height: pm(10),
    borderRadius: pm(10),
    backgroundColor: '#FFFFFF',
    shadowColor: 'rbga(0, 0, 0, 0.2)',
    elevation: 4,
  },
});

export default ProgressBar;