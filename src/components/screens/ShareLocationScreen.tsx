import React from 'react';
import { Share2 } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function ShareLocationScreen() {
  return (
    <PlaceholderScreen
      title="Share Location"
      description="Share your trip progress with friends and family"
      icon={<Share2 className="w-full h-full" />}
    />
  );
}