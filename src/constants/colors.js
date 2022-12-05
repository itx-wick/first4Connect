import Config from 'react-native-config';

export default {
  primary:
    Config.ENV == 'cpmc' || 'lmdc'
      ? '#d32f2f'
      : Config.ENV == 'rmcs'
      ? '#015197'
      : Config.ENV == 'rmdc'
      ? '#015197'
      : Config.ENV == 'yesh'
      ? '#0d9347'
      : '#000000',
  secondary:
    Config.ENV == 'cpmc' || 'lmdc'
      ? '#d32f2f'
      : Config.ENV == 'rmcs'
      ? '#015197'
      : Config.ENV == 'rmdc'
      ? '#015197'
      : Config.ENV == 'yesh'
      ? '#3bb54a'
      : '#000000',
  white: '#FFFFFF',
  offWhite: '#f8f8ff',
  whiteOpacity: '#c2c2c2',
  black: '#000000',
  blue: '#335dc1',
  divider: '#cdcdcd',
  green: '#3a7b7f',
  green_p: '#3ab54b',
  active: '#25a46e',
  transparent: '#00000000',
  red: '#FF0000',
  danger: '#d32f2f',
  purple: '#880c8c',
  gray: '#949494',
  darkGrey: '#2f2f32',
  lightGray: '#DCDCDC',
  whiteSmoke: '#f4f4f4',
  darkYellow: '#F6BE00',
  orange: '#F18400',
};
