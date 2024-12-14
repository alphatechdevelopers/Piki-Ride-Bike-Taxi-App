import React from 'react';
import { Award } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function RewardsScreen() {
  return (
    <PlaceholderScreen
      title="Rewards Program"
      description="View and redeem your earned points for discounts"
      icon={<Award className="w-full h-full" />}
    />
  );
}