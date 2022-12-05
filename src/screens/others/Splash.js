import React, {useEffect, useState} from 'react';
import {Animated, Image, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Config from 'react-native-config';

import {Commons} from '../../utils';
import {COLORS, IMAGES, ROUTES} from '../../constants';
import {Styles} from '../../styles';

const Splash = props => {
  const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
  const {isLoggedIn} = useSelector(state => state.user);
  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 3000,
    }).start(async function onComplete() {
      if (isLoggedIn) {
        Commons.reset(props.navigation, ROUTES.D_HOME);
      } else {
        Commons.reset(props.navigation, ROUTES.ON_BOARDING);
      }
    });
  };

  return (
    <SafeAreaView style={Styles.splash_safeArea}>
      <Animated.View
        style={{
          opacity: fadeAnimation,
        }}>
        <Image
          source={
            Config.ENV == 'lmdc' ? IMAGES.lmdc_main_logo : IMAGES.yesh_main_logo
          }
          style={Styles.splash_logo}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Splash;
