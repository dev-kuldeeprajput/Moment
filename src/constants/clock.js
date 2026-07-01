import { Platform } from 'react-native';

export const FLIP_DURATION = 620;
export const OUTER_MARGIN = 18;
export const PANEL_GAP = 30;
export const PANEL_SCALE = 0.92;

export const CLOCK_FONT = Platform.select({
  android: 'sans-serif-condensed',
  ios: 'Arial Rounded MT Bold',
});
