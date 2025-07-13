/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { width } from '../Constants/Dimensions';
import { AppColors } from '../Constants/Colors';
import { AppFontSize } from '../Constants/Fontsize';
import { AppFontFamily } from '../Constants/Fontfamily';
interface Social {
  source?: any;
  title?: string;
}
const SocialAuthBtn = ({ source, title }: Social) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: width * 0.42,
        height: 56,
        backgroundColor: '#ebe9e6',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 7,
      }}
    >
      <Image
        source={source}
        style={{ width: 24, height: 24 }}
        resizeMode="cover"
      />
      <Text
        style={{
          color: AppColors.gray,
          fontSize: AppFontSize.medium,
          fontFamily: AppFontFamily.InterSemiBold,
          fontWeight: '800',
          marginLeft: -width * 0.06,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialAuthBtn;

const styles = StyleSheet.create({});
