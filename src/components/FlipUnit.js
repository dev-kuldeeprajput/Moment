import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

import { FLIP_DURATION } from '../constants/clock';
import { styles } from '../styles/clockStyles';
import { ValueHalf } from './ValueHalf';

export function FlipUnit({ label, value, size, children }) {
  const [layout, setLayout] = useState(null);
  const [currentValue, setCurrentValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);
  const flip = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (value === currentValue) {
      return;
    }

    setPreviousValue(currentValue);
    setCurrentValue(value);
    flip.stopAnimation();
    flip.setValue(0);

    Animated.timing(flip, {
      toValue: 1,
      duration: FLIP_DURATION,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [currentValue, flip, value]);

  const oldTopStyle = {
    opacity: flip.interpolate({
      inputRange: [0, 0.499, 0.5],
      outputRange: [1, 1, 0],
    }),
    transform: [
      { perspective: 1400 },
      {
        rotateX: flip.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['0deg', '-90deg', '-90deg'],
        }),
      },
    ],
    transformOrigin: 'bottom',
  };

  const oldBottomStyle = {
    opacity: flip.interpolate({
      inputRange: [0, 0.499, 0.5],
      outputRange: [1, 1, 0],
    }),
  };

  const newBottomStyle = {
    opacity: flip.interpolate({
      inputRange: [0, 0.499, 0.5, 1],
      outputRange: [0, 0, 1, 1],
    }),
    transform: [
      { perspective: 1400 },
      {
        rotateX: flip.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['90deg', '90deg', '0deg'],
        }),
      },
    ],
    transformOrigin: 'top',
  };

  const oldTopShadeStyle = {
    opacity: flip.interpolate({
      inputRange: [0, 0.5],
      outputRange: [0, 0.58],
      extrapolate: 'clamp',
    }),
  };

  const newBottomShadeStyle = {
    opacity: flip.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.58, 0],
      extrapolate: 'clamp',
    }),
  };
  const unitSizeStyle = { width: size, height: size };

  return (
    <View
      accessibilityLabel={`${label} ${value}`}
      style={[styles.unit, unitSizeStyle]}
      onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout)}>
      {layout && (
        <>
          <ValueHalf
            half="top"
            value={currentValue}
            width={layout.width}
            height={layout.height}
          />
          <ValueHalf
            half="bottom"
            value={currentValue}
            width={layout.width}
            height={layout.height}
          />
          <ValueHalf
            half="bottom"
            value={previousValue}
            width={layout.width}
            height={layout.height}
            animatedStyle={oldBottomStyle}
          />
          <ValueHalf
            half="top"
            value={previousValue}
            width={layout.width}
            height={layout.height}
            animatedStyle={oldTopStyle}
            shadeStyle={oldTopShadeStyle}
          />
          <ValueHalf
            half="bottom"
            value={currentValue}
            width={layout.width}
            height={layout.height}
            animatedStyle={newBottomStyle}
            shadeStyle={newBottomShadeStyle}
          />
          <View pointerEvents="none" style={styles.hinge} />
        </>
      )}

      <Text allowFontScaling={false} style={styles.label}>
        {label}
      </Text>
      {children}
    </View>
  );
}
