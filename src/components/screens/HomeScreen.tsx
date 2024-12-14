import React from 'react';
import RideMap from '../map/RideMap';
import RideRequest from '../rides/RideRequest';
import { useRideRequest } from '../../hooks/useRideRequest';

export default function HomeScreen() {
  const { loading, error, handleAccept, handleDecline } = useRideRequest({
    onAcceptSuccess: () => alert('Ride accepted successfully!'),
    onDeclineSuccess: () => alert('Ride declined successfully!'),
  });

  const sampleRequest = {
    pickup: {
      latitude: -1.2921,
      longitude: 36.8219,
      address: "CBD, Nairobi"
    },
    destination: {
      latitude: -1.2975,
      longitude: 36.7924,
      address: "Westlands, Nairobi"
    },
    customerId: "1",
    estimatedFare: 250,
    estimatedDistance: 5.2
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RideMap
            pickup={sampleRequest.pickup}
            destination={sampleRequest.destination}
          />
        </div>
        <div>
          <RideRequest
            request={sampleRequest}
            onAccept={() => handleAccept(sampleRequest)}
            onDecline={() => handleDecline(sampleRequest)}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}