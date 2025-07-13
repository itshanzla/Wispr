/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import { AppFontSize } from '../../Constants/Fontsize';
import { AppFontFamily } from '../../Constants/Fontfamily';
import { AppColors } from '../../Constants/Colors';
import { height, width } from '../../Constants/Dimensions';
import { CommonActions, useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
  const isdarkmode = useColorScheme() === 'dark';
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        showHideTransition={'fade'}
        barStyle={isdarkmode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.main}>
        <Text
          style={[styles.header, { color: isdarkmode ? 'white' : 'black' }]}
        >
          WISPR
        </Text>
        <View style={styles.mainView}>
          <Image
            style={[styles.headerImg]}
            source={require('../../../assets/images/onboardImg1.png')}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.childView}>
        <Text style={styles.title}>
          Stay Connected With Your Friends and Family
        </Text>
        <View style={styles.childView2}>
          <Image
            style={{ width: 18, height: 18.71 }}
            source={require('../../../assets/icons/secure.png')}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>Secure, Private messaging</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Register' }],
                }),
              )
            }
            style={styles.btn}
          >
            <Text style={styles.btnTxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  main: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    width: width * 0.9,
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: AppFontSize.header,
    fontFamily: AppFontFamily.InterBold,
    fontWeight: 'bold',
    color: AppColors.white,
  },
  headerImg: {
    width: 279,
    height: 225,
  },
  childView: {
    width: width * 0.9,
    alignSelf: 'center',
    flex: 0.4,
  },
  title: {
    color: 'white',
    fontSize: AppFontSize.header,
    width: width * 0.8,
    fontWeight: 'bold',
    lineHeight: width * 0.11,
  },
  childView2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.05,
  },
  subtitle: {
    marginLeft: width * 0.05,
    fontSize: AppFontSize.medium,
    fontFamily: AppFontFamily.InterSemiBold,
    color: AppColors.white,
    fontWeight: '700',
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.15,
  },
  btn: {
    backgroundColor: AppColors.white,
    width: width * 0.9,
    height: 64,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontFamily: AppFontFamily.InterSemiBold,
    fontSize: AppFontSize.medium,
    fontWeight: '800',
    color: AppColors.black,
  },
});
