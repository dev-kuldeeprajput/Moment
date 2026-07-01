import React from 'react';
import { Animated, Text, View } from 'react-native';

import { styles } from '../styles/clockStyles';

export function ValueHalf({
  half,
  value,
  width,
  height,
  animatedStyle,
  shadeStyle,
}) {
  const halfHeight = height / 2;
  const halfPositionStyle = {
    top: half === 'top' ? 0 : halfHeight,
  };
  const textPositionStyle = {
    top: half === 'top' ? 0 : -halfHeight,
  };

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.valueHalf,
        halfPositionStyle,
        {
          width,
          height: halfHeight,
        },
        animatedStyle,
      ]}>
      <View
        style={[
          styles.valueFrame,
          textPositionStyle,
          {
            width,
            height,
          },
        ]}>
        <Text
          allowFontScaling={false}
          style={[
            styles.value,
            {
              fontSize: Math.min(width * 0.84, height * 0.82),
              lineHeight: Math.min(width * 0.84, height * 0.82) * 1.02,
            },
          ]}>
          {value}
        </Text>
      </View>
      {shadeStyle && (
        <Animated.View
          pointerEvents="none"
          style={[styles.flipShade, shadeStyle]}
        />
      )}
    </Animated.View>
  );
}
