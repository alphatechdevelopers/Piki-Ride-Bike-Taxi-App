import React from 'react';
import { Users } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function PreferredRidersScreen() {
  return (
    <PlaceholderScreen
      title="Preferred Riders"
      description="Choose and manage your favorite riders"
      icon={<Users className="w-full h-full" />}
    />
  );
}