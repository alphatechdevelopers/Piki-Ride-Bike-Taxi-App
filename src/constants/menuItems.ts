import {
  Calendar,
  Clock,
  Wallet,
  Award,
  Users,
  Zap,
  Leaf,
  Gift,
  Wrench,
  Building2,
  BarChart3,
  Share2
} from 'lucide-react';
import type { MenuItem } from '../types/menu';

export const BOOKING_ITEMS: MenuItem[] = [
  {
    id: 'multi-stop',
    label: 'Multi-Stop Booking',
    description: 'Add multiple stops to your ride',
    icon: Clock,
    section: 'booking',
    isNew: true,
  },
  {
    id: 'schedule',
    label: 'Schedule Ride',
    description: 'Book a ride for later',
    icon: Calendar,
    section: 'booking',
  },
];

export const PAYMENT_ITEMS: MenuItem[] = [
  {
    id: 'wallet',
    label: 'PikiWallet',
    description: 'Manage your wallet & rewards',
    icon: Wallet,
    section: 'payments',
    badge: 'New',
  },
  {
    id: 'rewards',
    label: 'Rewards Program',
    description: 'View and redeem your points',
    icon: Award,
    section: 'payments',
  },
];

export const SERVICE_ITEMS: MenuItem[] = [
  {
    id: 'preferred-riders',
    label: 'Preferred Riders',
    description: 'Choose your favorite riders',
    icon: Users,
    section: 'services',
  },
  {
    id: 'express',
    label: 'Express Rides',
    description: 'Get there faster',
    icon: Zap,
    section: 'services',
  },
  {
    id: 'eco',
    label: 'Eco-Friendly',
    description: 'Choose electric bikes',
    icon: Leaf,
    section: 'services',
    isNew: true,
  },
  {
    id: 'promos',
    label: 'Promotions',
    description: 'View current offers',
    icon: Gift,
    section: 'services',
  },
  {
    id: 'servicing',
    label: 'Bike Servicing',
    description: 'Book maintenance appointments',
    icon: Wrench, // Changed from Tool to Wrench
    section: 'services',
  },
  {
    id: 'share',
    label: 'Share Location',
    description: 'Share trip progress',
    icon: Share2,
    section: 'services',
  },
];

export const CORPORATE_ITEMS: MenuItem[] = [
  {
    id: 'corporate',
    label: 'Corporate Services',
    description: 'Business solutions',
    icon: Building2,
    section: 'corporate',
  },
];

export const ANALYTICS_ITEMS: MenuItem[] = [
  {
    id: 'analytics',
    label: 'Trip Analytics',
    description: 'View your travel insights',
    icon: BarChart3,
    section: 'analytics',
  },
];