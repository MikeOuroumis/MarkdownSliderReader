import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface HeaderProps {
  isDarkMode: boolean;
  onPress: () => void;
}

export function Header({isDarkMode, onPress}: HeaderProps) {
  const iconStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 30,
    marginLeft: 10,
  };

  const textColor = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, textColor]}>header</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={isDarkMode ? 'weather-sunny' : 'weather-night'}
          style={iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});
