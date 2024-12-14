import { useState, useCallback } from 'react';
import type { Stop, ScheduledRide, BookingPreferences, EnhancedRideRequest } from '../types/booking';

interface UseBookingProps {
  onBookingSuccess?: () => void;
  onBookingError?: (error: string) => void;
}

export const useBooking = ({ onBookingSuccess, onBookingError }: UseBookingProps = {}) => {
  const [stops, setStops] = useState<Stop[]>([]);
  const [schedule, setSchedule] = useState<ScheduledRide | undefined>();
  const [preferences, setPreferences] = useState<BookingPreferences>({
    isQuietRide: false,
    isExpressRide: false,
    isPackageDelivery: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBooking = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Validate booking
      if (stops.length < 2) {
        throw new Error('At least pickup and drop-off locations are required');
      }

      const request: EnhancedRideRequest = {
        stops,
        scheduledRide: schedule,
        preferences,
        estimatedFare: 0, // TODO: Calculate based on stops
        estimatedDuration: 0, // TODO: Calculate based on stops
        customerId: '1', // TODO: Get from auth context
      };

      // TODO: Implement actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Booking ride:', request);

      onBookingSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to book ride';
      setError(errorMessage);
      onBookingError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [stops, schedule, preferences, onBookingSuccess, onBookingError]);

  return {
    stops,
    setStops,
    schedule,
    setSchedule,
    preferences,
    setPreferences,
    loading,
    error,
    handleBooking,
  };
};