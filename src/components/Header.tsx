import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  isDarkMode: boolean;
  onPress: () => void;
}

export function Header({isDarkMode, onPress}: HeaderProps) {
  const iconStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 25,
    marginLeft: 10,
  };

  return (
    <View style={styles.container}>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
  },
});
