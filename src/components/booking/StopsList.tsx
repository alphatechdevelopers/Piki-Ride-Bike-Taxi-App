import React from 'react';
import { Grip, X, Plus } from 'lucide-react';
import type { Stop } from '../../types/booking';
import LocationInput from './LocationInput';

interface StopsListProps {
  stops: Stop[];
  onAddStop: () => void;
  onRemoveStop: (index: number) => void;
  onReorderStops: (newOrder: Stop[]) => void;
  onUpdateStop: (index: number, stop: Stop) => void;
}

export default function StopsList({
  stops,
  onAddStop,
  onRemoveStop,
  onReorderStops,
  onUpdateStop,
}: StopsListProps) {
  return (
    <div className="space-y-4">
      {stops.map((stop, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
        >
          <Grip className="w-5 h-5 text-gray-400 cursor-move" />
          <div className="flex-1">
            <LocationInput
              value={stop.location}
              onChange={(location) =>
                onUpdateStop(index, { ...stop, location })
              }
              placeholder={index === 0 ? "Pickup location" : "Drop-off location"}
            />
          </div>
          {stops.length > 2 && (
            <button
              onClick={() => onRemoveStop(index)}
              className="p-1 text-gray-400 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      ))}
      
      {stops.length < 5 && (
        <button
          onClick={onAddStop}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 px-3 py-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add another stop</span>
        </button>
      )}
    </div>
  );
}