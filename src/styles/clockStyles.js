import { StyleSheet } from 'react-native';

import { CLOCK_FONT, PANEL_GAP } from '../constants/clock';

export const styles = StyleSheet.create({
  clock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  portraitClock: {
    flexDirection: 'column',
  },
  landscapeClock: {
    flexDirection: 'row',
  },
  unit: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000000',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ffffff',
    borderRadius: 32,
  },
  portraitDivider: {
    height: PANEL_GAP,
  },
  landscapeDivider: {
    width: PANEL_GAP,
  },
  valueHalf: {
    position: 'absolute',
    left: 0,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    backgroundColor: '#000000',
  },
  valueFrame: {
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    color: '#f4f4f0',
    fontFamily: CLOCK_FONT,
    fontVariant: ['tabular-nums'],
    fontWeight: '900',
    letterSpacing: -2,
    textAlign: 'center',
    textShadowColor: '#f4f4f0',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1.2,
    includeFontPadding: false,
  },
  hinge: {
    position: 'absolute',
    top: '50%',
    right: 0,
    left: 0,
    height: 2,
    marginTop: -1,
    backgroundColor: '#242424',
  },
  flipShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  label: {
    position: 'absolute',
    top: 18,
    left: 18,
    color: '#51514e',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 2.4,
  },
  seconds: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    color: '#8a8a84',
    fontFamily: CLOCK_FONT,
    fontSize: 18,
    fontVariant: ['tabular-nums'],
    fontWeight: '900',
    letterSpacing: 1,
  },
});
