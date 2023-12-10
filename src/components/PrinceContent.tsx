import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
import {prepareContent} from '../utils/content';

const PAGE_PADDING = 20;
const FONT_SIZE = 15;

export default function PrinceContent({textColor}: {textColor: string}) {
  const {pages, title, titlePageIndex} = prepareContent(
    PAGE_PADDING,
    FONT_SIZE,
  );

  const textStyle = {color: textColor, fontSize: FONT_SIZE};

  return (
    <PagerView style={styles.container} initialPage={0}>
      {pages.map((page, index) => (
        <View key={index} style={styles.page}>
          {index === titlePageIndex && (
            <Text style={[styles.title, {color: textColor}]}>{title}</Text>
          )}
          <Text style={textStyle}>{page}</Text>
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
    padding: PAGE_PADDING,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
