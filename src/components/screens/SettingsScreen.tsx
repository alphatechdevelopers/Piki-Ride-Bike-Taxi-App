import React from 'react';
import { Bell, Shield, CreditCard, HelpCircle, User } from 'lucide-react';

const settingsItems = [
  { icon: User, label: 'Profile Settings', description: 'Update your personal information' },
  { icon: Bell, label: 'Notifications', description: 'Manage your notification preferences' },
  { icon: Shield, label: 'Privacy & Security', description: 'Control your privacy settings' },
  { icon: CreditCard, label: 'Payment Methods', description: 'Manage your payment options' },
  { icon: HelpCircle, label: 'Help & Support', description: 'Get help with your account' },
];

export default function SettingsScreen() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="space-y-4">
        {settingsItems.map(({ icon: Icon, label, description }) => (
          <button
            key={label}
            className="w-full flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium">{label}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}