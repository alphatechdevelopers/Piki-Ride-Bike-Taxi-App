import React from 'react';
import { Calendar } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function ScheduleRideScreen() {
  return (
    <PlaceholderScreen
      title="Schedule a Ride"
      description="Book your rides in advance for better planning"
      icon={<Calendar className="w-full h-full" />}
    />
  );
}