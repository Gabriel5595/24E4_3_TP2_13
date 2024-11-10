import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuestionItem({ question, onAnswer }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <Button key={index} title={option} onPress={() => onAnswer(option)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
});
