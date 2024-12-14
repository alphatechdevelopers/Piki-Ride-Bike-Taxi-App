import React from 'react';
import { Gift } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function PromotionsScreen() {
  return (
    <PlaceholderScreen
      title="Promotions"
      description="Discover current offers and special discounts"
      icon={<Gift className="w-full h-full" />}
    />
  );
}