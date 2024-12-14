import React from 'react';
import { Building2 } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function CorporateScreen() {
  return (
    <PlaceholderScreen
      title="Corporate Services"
      description="Business solutions for company transportation needs"
      icon={<Building2 className="w-full h-full" />}
    />
  );
}