import React from 'react';
import { Home, Clock, Settings } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import type { NavigationScreen } from '../../types/navigation';

const navItems = [
  { icon: Home, label: 'Home', screen: 'home' as NavigationScreen },
  { icon: Clock, label: 'History', screen: 'history' as NavigationScreen },
  { icon: Settings, label: 'Settings', screen: 'settings' as NavigationScreen },
];

export default function BottomNavigation() {
  const { currentScreen, setCurrentScreen } = useNavigation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around py-3">
          {navItems.map(({ icon: Icon, label, screen }) => (
            <button
              key={label}
              onClick={() => setCurrentScreen(screen)}
              className={`flex flex-col items-center px-3 py-1 transition-colors ${
                currentScreen === screen
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}