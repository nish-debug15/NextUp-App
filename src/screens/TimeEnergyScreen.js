import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const TIME_OPTIONS = [
  { label: '⚡ 10 min', value: 10, desc: 'Quick burst' },
  { label: '🕐 20 min', value: 20, desc: 'Focused' },
  { label: '🕑 30 min', value: 30, desc: 'Good chunk' },
  { label: '🕓 60+ min', value: 90, desc: 'Deep work' },
];

const ENERGY_OPTIONS = [
  { label: '🔴', value: 'low', desc: 'Low — keep it easy' },
  { label: '🟡', value: 'medium', desc: 'Medium — can focus' },
  { label: '🟢', value: 'high', desc: 'High — ready to go' },
];

export default function TimeEnergyScreen({ route, navigation }) {
  const { goal } = route.params;
  const [timeSelected, setTimeSelected] = useState(null);
  const [energySelected, setEnergySelected] = useState(null);

  const canContinue = timeSelected !== null && energySelected !== null;

  const handleContinue = () => {
    navigation.navigate('NextAction', {
      goal,
      minutes: timeSelected,
      energy: energySelected,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0F" />
      <View style={styles.container}>

        {/* Back + goal label */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.goalBadge}>
            <Text style={styles.goalBadgeText}>{goal.label}</Text>
          </View>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Quick check</Text>
          <Text style={styles.subtitle}>Takes 2 seconds. Helps us pick the right task.</Text>
        </View>

        {/* Time section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>HOW MUCH TIME DO YOU HAVE?</Text>
          <View style={styles.timeGrid}>
            {TIME_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                style={[
                  styles.timeCard,
                  timeSelected === opt.value && styles.timeCardSelected,
                ]}
                onPress={() => setTimeSelected(opt.value)}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.timeLabel,
                  timeSelected === opt.value && styles.timeLabelSelected,
                ]}>
                  {opt.label}
                </Text>
                <Text style={styles.timeDesc}>{opt.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Energy section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ENERGY LEVEL RIGHT NOW?</Text>
          <View style={styles.energyRow}>
            {ENERGY_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                style={[
                  styles.energyCard,
                  energySelected === opt.value && styles.energyCardSelected,
                ]}
                onPress={() => setEnergySelected(opt.value)}
                activeOpacity={0.7}
              >
                <Text style={styles.energyEmoji}>{opt.label}</Text>
                <Text style={[
                  styles.energyDesc,
                  energySelected === opt.value && styles.energyDescSelected,
                ]}>
                  {opt.desc}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={[styles.cta, !canContinue && styles.ctaDisabled]}
          onPress={handleContinue}
          disabled={!canContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaText}>Show me what to do →</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  backBtn: {
    paddingVertical: 4,
  },
  backText: {
    color: '#7A7994',
    fontSize: 14,
  },
  goalBadge: {
    backgroundColor: '#1E1A36',
    borderWidth: 1,
    borderColor: '#7C6FFF',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  goalBadgeText: {
    color: '#C4BAFF',
    fontSize: 12,
    fontWeight: '500',
  },
  header: {
    marginBottom: 36,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#F1F0F8',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#7A7994',
  },
  section: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 10,
    fontFamily: 'monospace',
    letterSpacing: 2,
    color: '#5A5975',
    marginBottom: 14,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeCard: {
    width: '47%',
    backgroundColor: '#1A1A26',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2A2A3A',
  },
  timeCardSelected: {
    borderColor: '#7C6FFF',
    backgroundColor: '#1E1A36',
  },
  timeLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#7A7994',
    marginBottom: 2,
  },
  timeLabelSelected: {
    color: '#C4BAFF',
  },
  timeDesc: {
    fontSize: 11,
    color: '#4A4960',
  },
  energyRow: {
    flexDirection: 'row',
    gap: 10,
  },
  energyCard: {
    flex: 1,
    backgroundColor: '#1A1A26',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A3A',
  },
  energyCardSelected: {
    borderColor: '#7C6FFF',
    backgroundColor: '#1E1A36',
  },
  energyEmoji: {
    fontSize: 22,
    marginBottom: 6,
  },
  energyDesc: {
    fontSize: 10,
    color: '#5A5975',
    textAlign: 'center',
    lineHeight: 14,
  },
  energyDescSelected: {
    color: '#A09CC0',
  },
  cta: {
    marginTop: 'auto',
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