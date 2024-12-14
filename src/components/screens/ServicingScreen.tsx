import React from 'react';
import { Wrench } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function ServicingScreen() {
  return (
    <PlaceholderScreen
      title="Bike Servicing"
      description="Schedule maintenance appointments for your bike"
      icon={<Wrench className="w-full h-full" />}
    />
  );
}