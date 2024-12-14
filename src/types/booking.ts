import type { Location } from './location';

export interface Stop {
  location: Location;
  order: number;
  notes?: string;
}

export interface ScheduledRide {
  scheduledTime: Date;
  isRecurring: boolean;
  recurringDays?: number[];  // 0-6 representing Sunday-Saturday
  reminderEnabled: boolean;
}

export interface BookingPreferences {
  isQuietRide: boolean;
  isExpressRide: boolean;
  isPackageDelivery: boolean;
  preferredRiderId?: string;
}

export interface EnhancedRideRequest {
  stops: Stop[];
  scheduledRide?: ScheduledRide;
  preferences: BookingPreferences;
  estimatedFare: number;
  estimatedDuration: number;
  customerId: string;
}