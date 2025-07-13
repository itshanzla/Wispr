/* eslint-disable react-native/no-inline-styles */
import { TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { height, width } from '../Constants/Dimensions';
import { AppColors } from '../Constants/Colors';
import { AppFontFamily } from '../Constants/Fontfamily';
interface SocialTextFields {
  placeholder?: string;
  secureTextEntry?: boolean;
  secure?: boolean;
  onPress?: () => void;
}
const SocialTextFields = ({
  placeholder,
  secureTextEntry,
  secure,
  onPress,
}: SocialTextFields) => {
  return (
    <View
      style={{
        width: width * 0.9,
        height: 60,
        borderRadius: 10,
        marginVertical: height * 0.01,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: AppColors.bluishWhite,
        elevation: 7,
        paddingRight: secure ? width * 0.1 : 0,
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={AppColors.gray}
        secureTextEntry={secureTextEntry}
        style={{
          color: AppColors.gray,
          fontFamily: AppFontFamily.InterSemiBold,
          fontWeight: '800',
        }}
      />
      {secure && (
        <TouchableOpacity
          onPress={onPress}
          style={{ position: 'absolute', right: 20 }}
        >
          <Icon size={24} name={secureTextEntry ? 'eye' : 'eye-off'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SocialTextFields;
