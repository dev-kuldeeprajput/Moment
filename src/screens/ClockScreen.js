import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FlipUnit } from '../components/FlipUnit';
import {
  OUTER_MARGIN,
  PANEL_GAP,
  PANEL_SCALE,
} from '../constants/clock';
import { useCurrentTime } from '../hooks/useCurrentTime';
import { styles } from '../styles/clockStyles';

function padTime(value) {
  return String(value).padStart(2, '0');
}

export default function ClockScreen() {
  const time = useCurrentTime();
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const horizontalSpacing = Math.max(
    OUTER_MARGIN,
    insets.left,
    insets.right,
  );
  const verticalSpacing = Math.max(OUTER_MARGIN, insets.top, insets.bottom);
  const topSpacing = verticalSpacing;
  const rightSpacing = horizontalSpacing;
  const bottomSpacing = verticalSpacing;
  const leftSpacing = horizontalSpacing;
  const isLandscape = window.width > window.height;
  const availableWidth = window.width - leftSpacing - rightSpacing;
  const availableHeight = window.height - topSpacing - bottomSpacing;
  const panelSize = Math.max(
    0,
    Math.floor(
      (isLandscape
        ? Math.min((availableWidth - PANEL_GAP) / 2, availableHeight)
        : Math.min(availableWidth, (availableHeight - PANEL_GAP) / 2)) *
        PANEL_SCALE,
    ),
  );

  return (
    <View
      style={[
        styles.clock,
        isLandscape ? styles.landscapeClock : styles.portraitClock,
        {
          paddingTop: topSpacing,
          paddingRight: rightSpacing,
          paddingBottom: bottomSpacing,
          paddingLeft: leftSpacing,
        },
      ]}>
      <FlipUnit
        label="HOUR"
        value={padTime(time.getHours())}
        size={panelSize}
      />
      <View
        style={
          isLandscape ? styles.landscapeDivider : styles.portraitDivider
        }
      />
      <FlipUnit
        label="MINUTE"
        value={padTime(time.getMinutes())}
        size={panelSize}>
        <Text
          accessibilityLabel={`Seconds ${padTime(time.getSeconds())}`}
          allowFontScaling={false}
          style={styles.seconds}>
          {padTime(time.getSeconds())}
        </Text>
      </FlipUnit>
    </View>
  );
}
