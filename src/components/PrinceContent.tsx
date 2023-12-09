import React from 'react';
import Markdown from 'react-native-markdown-display';
import {princeContent} from '../assets/princeContent';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

export default function PrinceContent() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <Markdown>{princeContent}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
