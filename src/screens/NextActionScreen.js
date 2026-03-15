import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';
import { getNextTask } from '../data/tasks';

export default function NextActionScreen({ route, navigation }) {
  const { goal, minutes, energy } = route.params;
  const [task, setTask] = useState('');
  const [done, setDone] = useState(false);
  const [reflection, setReflection] = useState(null);
  const [seconds, setSeconds] = useState(minutes * 60);
  const [timerActive, setTimerActive] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const doneAnim = useRef(new Animated.Value(0)).current;
  const timerRef = useRef(null);

  useEffect(() => {
    const nextTask = getNextTask(goal.category, energy, minutes);
    setTask(nextTask);

    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!timerActive || done) return;
    timerRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timerActive, done]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleDone = () => {
    clearInterval(timerRef.current);
    setTimerActive(false);
    setDone(true);
    Animated.spring(doneAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  const handleSkip = () => {
    // Get a different task
    clearInterval(timerRef.current);
    const newTask = getNextTask(goal.category, energy, minutes);
    setTask(newTask);
    setSeconds(minutes * 60);
    setTimerActive(true);

    // Re-animate
    fadeAnim.setValue(0);
    slideAnim.setValue(20);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 350, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  const handleReflect = (val) => {
    setReflection(val);
    setTimeout(() => navigation.navigate('Goal'), 1400);
  };

  const timerPct = seconds / (minutes * 60);
  const timerColor = timerPct > 0.5 ? '#7C6FFF' : timerPct > 0.25 ? '#F59E0B' : '#EF4444';

  // Done state
  if (done) {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor="#0A0A0F" />
        <Animated.View style={[styles.container, { opacity: doneAnim }]}>
          <View style={styles.doneCenter}>
            <Text style={styles.doneEmoji}>✅</Text>
            <Text style={styles.doneTitle}>Done.</Text>
            <Text style={styles.doneGoal}>{goal.label}</Text>
          </View>

          <View style={styles.reflectSection}>
            <Text style={styles.reflectQ}>Did this move you closer to your goal?</Text>
            <View style={styles.reflectRow}>
              {[
                { label: 'Yes 💪', value: 'yes', color: '#10B981' },
                { label: 'Kinda', value: 'kinda', color: '#F59E0B' },
                { label: 'Not really', value: 'no', color: '#6B6A85' },
              ].map((opt) => (
                <TouchableOpacity
                  key={opt.value}
                  style={[
                    styles.reflectBtn,
                    reflection === opt.value && { borderColor: opt.color, backgroundColor: opt.color + '22' },
                  ]}
                  onPress={() => handleReflect(opt.value)}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.reflectBtnText,
                    reflection === opt.value && { color: opt.color },
                  ]}>
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={styles.exitBtn}
            onPress={() => navigation.navigate('Goal')}
          >
            <Text style={styles.exitText}>Back to goals →</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0F" />
      <View style={styles.container}>

        {/* Top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <View style={[styles.timerBadge, { borderColor: timerColor }]}>
            <Text style={[styles.timerText, { color: timerColor }]}>
              {formatTime(seconds)}
            </Text>
          </View>
        </View>

        {/* Header label */}
        <Text style={styles.headerLabel}>YOUR NEXT STEP</Text>

        {/* Task card */}
        <Animated.View
          style={[
            styles.taskCard,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.taskText}>{task}</Text>
        </Animated.View>

        {/* Goal + time meta */}
        <View style={styles.metaRow}>
          <View style={styles.metaBadge}>
            <Text style={styles.metaText}>🎯 {goal.label}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Text style={styles.metaText}>⏱ {minutes} min</Text>
          </View>
          <View style={styles.metaBadge}>
            <Text style={styles.metaText}>
              {energy === 'high' ? '🟢' : energy === 'medium' ? '🟡' : '🔴'} {energy}
            </Text>
          </View>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Buttons */}
        <TouchableOpacity style={styles.doneBtn} onPress={handleDone} activeOpacity={0.8}>
          <Text style={styles.doneBtnText}>Done ✓</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipBtn} onPress={handleSkip} activeOpacity={0.7}>
          <Text style={styles.skipBtnText}>Give me a different task →</Text>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 36,
  },
  backText: {
    color: '#5A5975',
    fontSize: 14,
  },
  timerBadge: {
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  timerText: {
    fontFamily: 'monospace',
    fontSize: 13,
    fontWeight: '600',
  },
  headerLabel: {
    fontFamily: 'monospace',
    fontSize: 10,
    letterSpacing: 3,
    color: '#5A5975',
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: '#131320',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2E2A4A',
    padding: 28,
    marginBottom: 20,
  },
  taskText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F1F0F8',
    lineHeight: 32,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  metaBadge: {
    backgroundColor: '#1A1A26',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#2A2A3A',
  },
  metaText: {
    fontSize: 11,
    color: '#7A7994',
  },
  doneBtn: {
    backgroundColor: '#10B981',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 12,
  },
  doneBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  skipBtn: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A3A',
  },
  skipBtnText: {
    fontSize: 14,
    color: '#5A5975',
  },

  // Done state
  doneCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  doneTitle: {
    fontSize: 40,
    fontWeight: '800',
    color: '#10B981',
    marginBottom: 8,
  },
  doneGoal: {
    fontSize: 15,
    color: '#7A7994',
  },
  reflectSection: {
    marginBottom: 24,
  },
  reflectQ: {
    fontSize: 15,
    color: '#A0A0C0',
    textAlign: 'center',
    marginBottom: 14,
    lineHeight: 22,
  },
  reflectRow: {
    flexDirection: 'row',
    gap: 8,
  },
  reflectBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A3A',
    alignItems: 'center',
  },
  reflectBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5A5975',
  },
  exitBtn: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  exitText: {
    fontSize: 13,
    color: '#4A4960',
  },
});