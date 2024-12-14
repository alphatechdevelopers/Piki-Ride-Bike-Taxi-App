import React from 'react';
import { Clock } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function MultiStopScreen() {
  return (
    <PlaceholderScreen
      title="Multi-Stop Booking"
      description="Add multiple stops to your ride for convenient pickups and drop-offs"
      icon={<Clock className="w-full h-full" />}
    />
  );
}