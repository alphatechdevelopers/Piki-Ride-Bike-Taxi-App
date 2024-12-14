import React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import MainContent from './MainContent';
import SafetyButton from '../common/SafetyButton';
import SideMenu from './SideMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      <SideMenu />
      {children}
      <SafetyButton />
      <BottomNavigation />
    </div>
  );
}