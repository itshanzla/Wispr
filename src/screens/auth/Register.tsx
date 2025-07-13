/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  StatusBar,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { height, width } from '../../Constants/Dimensions';
import { AppColors } from '../../Constants/Colors';
import { AppFontSize } from '../../Constants/Fontsize';
import { AppFontFamily } from '../../Constants/Fontfamily';
import SocialAuthBtn from '../../components/SocialAuthBtn';
import SocialTextFields from '../../components/SocialTextFields';

const Register = () => {
  const isdarkmode = useColorScheme() === 'dark';
  const [showSecureText, setShowSecureText] = useState<boolean>(false);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const toggleShowText = () => {
    setShowSecureText(!showSecureText);
  };
  const toggleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        showHideTransition={'fade'}
        barStyle={isdarkmode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ height: height * 1.2 }}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.MainView}>
          <View style={styles.headerView}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require('../../../assets/icons/Claps.png')}
            />
          </View>
          <Text style={styles.signUp}>Sign Up</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: width * 0.1,
              justifyContent: 'space-evenly',
            }}
          >
            <SocialAuthBtn
              title="Facebook"
              source={require('../../../assets/icons/facebook.png')}
            />
            <SocialAuthBtn
              title="Google"
              source={require('../../../assets/icons/google.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: width * 0.05,
            }}
          >
            <View
              style={{
                width: width * 0.42,
                height: 2,
                backgroundColor: AppColors.white,
              }}
            />
            <Text
              style={{
                color: AppColors.white,
                fontSize: AppFontSize.medium,
                marginHorizontal: 10,
              }}
            >
              Or
            </Text>
            <View
              style={{
                width: width * 0.42,
                height: 2,
                backgroundColor: AppColors.white,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: width * 0.05,
            }}
          >
            <SocialTextFields placeholder="Name" />
            <SocialTextFields placeholder="Email/Phone Number" />
            <SocialTextFields
              placeholder="Password"
              secure={true}
              secureTextEntry={!showSecureText}
              onPress={toggleShowText}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: width * 0.85,
                marginTop: width * 0.05,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggleAgreeTerms}
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: AppColors.white,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {agreeTerms && (
                  <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={require('../../../assets/icons/tick.png')}
                  />
                )}
              </TouchableOpacity>
              <Text style={{ color: 'white', paddingHorizontal: width * 0.05 }}>
                {"I'm agree to the "}
                <Text>Terms of Services </Text>and
                <Text>
                  <Text> Privacy & Policy </Text>
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: width * 0.9,
                height: 60,
                backgroundColor: AppColors.yellow,
                elevation: 7,
                marginTop: width * 0.1,
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: AppFontSize.large,
                  fontFamily: AppFontFamily.InterBold,
                  color: AppColors.black,
                  fontWeight: 'bold',
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                marginTop: width * 0.03,
                fontSize: AppFontSize.extramedium,
              }}
            >
              Do you have an Account??
              <Text
                style={{
                  color: AppColors.yellow,
                }}
              >
                {' '}
                Sign in
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  MainView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  headerView: {
    backgroundColor: AppColors.yellow,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  signUp: {
    color: AppColors.white,
    marginTop: width * 0.06,
    fontSize: AppFontSize.header,
    fontFamily: AppFontFamily.InterBold,
    fontWeight: 'bold',
  },
});
