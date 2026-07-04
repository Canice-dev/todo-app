import { createSettingsStyles } from '@/assets/styles/settings.styles';
import ProgressStats from '@/components/ProgressStats';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


const SettingsScreen = () => {

  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const {colors, isDarkMode, toggleDarkMode} = useTheme();

  const settindStyles = createSettingsStyles(colors)
  return (
    <LinearGradient colors={colors.gradients.background} style={settindStyles.container}>
      <SafeAreaView style={settindStyles.safeArea}>
        <View style={settindStyles.header}>
          <View style={settindStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settindStyles.iconContainer}>
              <Ionicons name='settings' size={28} color='#fff' />
            </LinearGradient>
            <Text style={settindStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView style={settindStyles.scrollView} contentContainerStyle={settindStyles.content} showsVerticalScrollIndicator={false}>
          <ProgressStats />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingsScreen 