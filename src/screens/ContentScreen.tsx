import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Header} from '../components/Header';
import PrinceContent from '../components/PrinceContent';

export function ContentScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <Header isDarkMode={isDarkMode} onPress={toggleTheme} />
      <PrinceContent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});
