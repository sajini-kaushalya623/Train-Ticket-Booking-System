// data/stations.js
// All Sri Lankan Railway Stations

export const STATIONS = [
  { id: 1, name: 'Colombo Fort', line: 'Main Line' },
  { id: 2, name: 'Maradana', line: 'Main Line' },
  { id: 3, name: 'Galle', line: 'Coastal Line' },
  { id: 4, name: 'Matara', line: 'Coastal Line' },
  { id: 5, name: 'Kandy', line: 'Main Line' },
  { id: 6, name: 'Badulla', line: 'Upcountry Line' },
  { id: 7, name: 'Nanu Oya', line: 'Upcountry Line' },
  { id: 8, name: 'Hatton', line: 'Upcountry Line' },
  { id: 9, name: 'Kurunegala', line: 'Main Line' },
  { id: 10, name: 'Anuradhapura', line: 'Northern Line' },
  { id: 11, name: 'Jaffna', line: 'Northern Line' },
  { id: 12, name: 'Vavuniya', line: 'Northern Line' },
  { id: 13, name: 'Polonnaruwa', line: 'Eastern Line' },
  { id: 14, name: 'Batticaloa', line: 'Eastern Line' },
  { id: 15, name: 'Trincomalee', line: 'Eastern Line' }
];

export const POPULAR_ROUTES = [
  { from: 'Colombo Fort', to: 'Kandy', icon: '🏔️' },
  { from: 'Colombo Fort', to: 'Galle', icon: '🏖️' },
  { from: 'Colombo Fort', to: 'Badulla', icon: '🚂' },
  { from: 'Colombo Fort', to: 'Jaffna', icon: '🌴' }
];