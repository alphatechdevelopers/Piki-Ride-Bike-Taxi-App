export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  placeId?: string;
  name?: string;
}

export interface LocationSuggestion {
  location: Location;
  type: 'recent' | 'saved' | 'search';
  label?: string;
}