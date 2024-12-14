import React from 'react';
import { Leaf } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function EcoFriendlyScreen() {
  return (
    <PlaceholderScreen
      title="Eco-Friendly Rides"
      description="Choose electric bikes for sustainable transportation"
      icon={<Leaf className="w-full h-full" />}
    />
  );
}