import React from 'react';
import { Wallet } from 'lucide-react';
import PlaceholderScreen from './PlaceholderScreen';

export default function WalletScreen() {
  return (
    <PlaceholderScreen
      title="PikiWallet"
      description="Manage your wallet balance and view transaction history"
      icon={<Wallet className="w-full h-full" />}
    />
  );
}