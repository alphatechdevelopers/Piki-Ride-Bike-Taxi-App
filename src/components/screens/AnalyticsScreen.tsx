import React from 'react';
import { BarChart3 } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function AnalyticsScreen() {
  return (
    <PlaceholderScreen
      title="Trip Analytics"
      description="View insights about your travel patterns and expenses"
      icon={<BarChart3 className="w-full h-full" />}
    />
  );
}