import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import type { Location, LocationSuggestion } from '../../types/location';

interface LocationInputProps {
  value: Location;
  onChange: (location: Location) => void;
  placeholder?: string;
}

export default function LocationInput({
  value,
  onChange,
  placeholder = "Enter location"
}: LocationInputProps) {
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    // TODO: Implement actual location search
    await new Promise(resolve => setTimeout(resolve, 500));
    setSuggestions([
      {
        location: {
          latitude: -1.2921,
          longitude: 36.8219,
          address: "CBD, Nairobi",
          name: "Nairobi CBD"
        },
        type: 'search'
      }
    ]);
    setIsSearching(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={value.address}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-700"
        />
        {isSearching && (
          <Search className="w-5 h-5 text-gray-400 animate-spin" />
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(suggestion.location);
                setSuggestions([]);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-start space-x-3"
            >
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium">{suggestion.location.name}</p>
                <p className="text-sm text-gray-500">
                  {suggestion.location.address}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}