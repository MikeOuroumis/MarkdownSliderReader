import React from 'react';
import Markdown from 'react-native-markdown-display';
import {princeContent} from '../assets/princeContent';
import {StyleSheet, View} from 'react-native';
import {paginateContent} from '../utils/pagination';
import PagerView from 'react-native-pager-view';

export default function PrinceContent({textColor}: {textColor: string}) {
  const markdownStyles = {
    text: {
      color: textColor,
    },
  };

  const pages = paginateContent(princeContent, 1000);

  return (
    <PagerView style={styles.container} initialPage={0}>
      {pages.map((page, index) => (
        <View key={index} style={styles.page}>
          <Markdown style={markdownStyles}>{page}</Markdown>
        </View>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    padding: 20,
  },
});
