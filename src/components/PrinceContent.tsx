import React from 'react';
import Markdown from 'react-native-markdown-display';
import {princeContent} from '../assets/princeContent';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

export default function PrinceContent({textColor}: {textColor: string}) {
  const markdownStyles = {
    text: {
      color: textColor,
    },
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <Markdown style={markdownStyles}>{princeContent}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
