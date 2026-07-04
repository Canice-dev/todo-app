import { createSettingsStyles } from '@/assets/styles/settings.styles';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const Preferences = () => {

  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const {colors, isDarkMode, toggleDarkMode} = useTheme();

  const settingsStyle = createSettingsStyles(colors);



  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
      <Text style={settingsStyle.sectionTitle}>Preferences</Text>
      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient colors={colors.gradients.primary} style={settingsStyle.settingIcon}>
            <Ionicons name='moon' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={'#fff'}
          trackColor={{ false: colors.border, true: colors.primary }}
          // ios_backgroundColor={colors.border}
        />
      </View>

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient colors={colors.gradients.warning} style={settingsStyle.settingIcon}>
            <Ionicons name='notifications' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>notifications</Text>
        </View>
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled (!isNotificationEnabled)}
          thumbColor={'#fff'}
          trackColor={{ false: colors.border, true: colors.warning }}
          // ios_backgroundColor={colors.border}
        />
      </View>

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient colors={colors.gradients.success} style={settingsStyle.settingIcon}>
            <Ionicons name='notifications' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync (!isAutoSync)}
          thumbColor={'#fff'}
          trackColor={{ false: colors.border, true: colors.success }}
          // ios_backgroundColor={colors.border}
        />
      </View>


    </LinearGradient>
  )
}

export default Preferences