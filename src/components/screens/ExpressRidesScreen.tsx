import React from 'react';
import { Zap } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function ExpressRidesScreen() {
  return (
    <PlaceholderScreen
      title="Express Rides"
      description="Get to your destination faster with priority routing"
      icon={<Zap className="w-full h-full" />}
    />
  );
}