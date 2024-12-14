import React from 'react';
import RideHistory from '../rides/RideHistory';

export default function HistoryScreen() {
  const sampleRides = [
    {
      id: "1",
      customerId: "1",
      riderId: "2",
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
      status: "completed",
      fare: 250,
      distance: 5.2,
      duration: 1800,
      createdAt: new Date(Date.now() - 3600000),
      updatedAt: new Date()
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Ride History</h2>
      <RideHistory rides={sampleRides} />
    </div>
  );
}