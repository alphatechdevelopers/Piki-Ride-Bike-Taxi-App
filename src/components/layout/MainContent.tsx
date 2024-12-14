import React from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useMenu } from '../../contexts/MenuContext';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MultiStopScreen from '../screens/MultiStopScreen';
import ScheduleRideScreen from '../screens/ScheduleRideScreen';
import WalletScreen from '../screens/WalletScreen';
import RewardsScreen from '../screens/RewardsScreen';
import PreferredRidersScreen from '../screens/PreferredRidersScreen';
import ExpressRidesScreen from '../screens/ExpressRidesScreen';
import EcoFriendlyScreen from '../screens/EcoFriendlyScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import ServicingScreen from '../screens/ServicingScreen';
import ShareLocationScreen from '../screens/ShareLocationScreen';
import CorporateScreen from '../screens/CorporateScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

export default function MainContent() {
  const { currentScreen } = useNavigation();
  const { activeMenuItem } = useMenu();

  // If there's an active menu item, show its corresponding screen
  if (activeMenuItem) {
    switch (activeMenuItem.id) {
      case 'multi-stop':
        return <MultiStopScreen />;
      case 'schedule':
        return <ScheduleRideScreen />;
      case 'wallet':
        return <WalletScreen />;
      case 'rewards':
        return <RewardsScreen />;
      case 'preferred-riders':
        return <PreferredRidersScreen />;
      case 'express':
        return <ExpressRidesScreen />;
      case 'eco':
        return <EcoFriendlyScreen />;
      case 'promos':
        return <PromotionsScreen />;
      case 'servicing':
        return <ServicingScreen />;
      case 'share':
        return <ShareLocationScreen />;
      case 'corporate':
        return <CorporateScreen />;
      case 'analytics':
        return <AnalyticsScreen />;
      default:
        return null;
    }
  }

  // Otherwise, show the default navigation screens
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'history' && <HistoryScreen />}
      {currentScreen === 'settings' && <SettingsScreen />}
    </main>
  );
}