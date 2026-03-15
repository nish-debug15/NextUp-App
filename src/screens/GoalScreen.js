import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { GOAL_TEMPLATES } from '../data/tasks';

export default function GoalScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  const [customGoal, setCustomGoal] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const handleSelect = (goal) => {
    setSelected(goal.id);
    setShowCustom(false);
    setCustomGoal('');
  };

  const handleContinue = () => {
    if (!selected && !customGoal.trim()) return;
    const goalData = selected
      ? GOAL_TEMPLATES.find(g => g.id === selected)
      : { id: 'custom', label: customGoal.trim(), category: 'startup' };
    navigation.navigate('TimeEnergy', { goal: goalData });
  };

  const canContinue = selected || customGoal.trim().length > 2;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0F" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.appName}>NextUp</Text>
            <Text style={styles.tagline}>What do you want to work on?</Text>
            <Text style={styles.subtitle}>Pick a goal — we'll figure out your next step.</Text>
          </View>

          {/* Goal cards */}
          <View style={styles.goalList}>
            {GOAL_TEMPLATES.map((goal) => (
              <TouchableOpacity
                key={goal.id}
                style={[
                  styles.goalCard,
                  selected === goal.id && styles.goalCardSelected,
                ]}
                onPress={() => handleSelect(goal)}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.goalText,
                  selected === goal.id && styles.goalTextSelected,
                ]}>
                  {goal.label}
                </Text>
                {selected === goal.id && (
                  <View style={styles.checkDot} />
                )}
              </TouchableOpacity>
            ))}

            {/* Custom goal option */}
            <TouchableOpacity
              style={[
                styles.goalCard,
                showCustom && styles.goalCardSelected,
              ]}
              onPress={() => {
                setShowCustom(true);
                setSelected(null);
              }}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.goalText,
                showCustom && styles.goalTextSelected,
              ]}>
                ✏️  Something else...
              </Text>
            </TouchableOpacity>

            {showCustom && (
              <TextInput
                style={styles.customInput}
                placeholder="e.g. Learn Spanish, Read more books..."
                placeholderTextColor="#5A5975"
                value={customGoal}
                onChangeText={setCustomGoal}
                autoFocus
                returnKeyType="done"
              />
            )}
          </View>

          {/* CTA */}
          <TouchableOpacity
            style={[styles.cta, !canContinue && styles.ctaDisabled]}
            onPress={handleContinue}
            disabled={!canContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.ctaText}>Find my next step →</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 36,
  },
  appName: {
    fontFamily: 'monospace',
    fontSize: 12,
    letterSpacing: 4,
    color: '#7C6FFF',
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  tagline: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F1F0F8',
    marginBottom: 8,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 15,
    color: '#9A99B4',
    lineHeight: 22,
  },
  goalList: {
    flex: 1,
    gap: 10,
    marginBottom: 32,
  },
  goalCard: {
    backgroundColor: '#1A1A26',
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#2A2A3A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalCardSelected: {
    borderColor: '#7C6FFF',
    backgroundColor: '#1E1A36',
  },
  goalText: {
    fontSize: 16,
    color: '#A0A0C0',
    fontWeight: '500',
  },
  goalTextSelected: {
    color: '#C4BAFF',
  },
  checkDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7C6FFF',
  },
  customInput: {
    backgroundColor: '#1A1A26',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#7C6FFF',
    fontSize: 15,
    color: '#F1F0F8',
    marginTop: 4,
  },
  cta: {
    backgroundColor: '#7C6FFF',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  ctaDisabled: {
    backgroundColor: '#2A2A3A',
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
});