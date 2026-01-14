// data/trains.js
// Train Schedules for Sri Lanka Railways

export const TRAIN_SCHEDULES = {
  'Colombo Fort-Kandy': [
    {
      id: 'T001',
      name: 'Podi Menike',
      type: 'Express',
      departure: '06:00',
      arrival: '09:15',
      duration: '3h 15m',
      from: 'Colombo Fort',
      to: 'Kandy',
      classes: ['1st AC', '2nd Reserved', '3rd'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Ragama', 'Gampaha', 'Veyangoda', 'Polgahawela', 'Kurunegala', 'Kandy']
    },
    {
      id: 'T002',
      name: 'Udarata Menike',
      type: 'Express',
      departure: '08:30',
      arrival: '11:50',
      duration: '3h 20m',
      from: 'Colombo Fort',
      to: 'Kandy',
      classes: ['1st AC', '2nd Reserved', '2nd Unreserved'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Ragama', 'Gampaha', 'Veyangoda', 'Polgahawela', 'Kurunegala', 'Kandy']
    },
    {
      id: 'T003',
      name: 'Intercity Express',
      type: 'Intercity',
      departure: '15:35',
      arrival: '18:20',
      duration: '2h 45m',
      from: 'Colombo Fort',
      to: 'Kandy',
      classes: ['1st AC', '2nd Reserved'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Ragama', 'Gampaha', 'Polgahawela', 'Kandy']
    }
  ],
  'Colombo Fort-Badulla': [
    {
      id: 'T004',
      name: 'Ella Odyssey',
      type: 'Special Express',
      departure: '05:45',
      arrival: '16:10',
      duration: '10h 25m',
      from: 'Colombo Fort',
      to: 'Badulla',
      classes: ['1st AC', '2nd Reserved'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Kandy', 'Hatton', 'Nanu Oya', 'Ella', 'Badulla']
    },
    {
      id: 'T005',
      name: 'Night Mail',
      type: 'Night Mail',
      departure: '20:00',
      arrival: '08:15',
      duration: '12h 15m',
      from: 'Colombo Fort',
      to: 'Badulla',
      classes: ['2nd Reserved', '3rd'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Kandy', 'Hatton', 'Nanu Oya', 'Ella', 'Badulla']
    }
  ],
  'Colombo Fort-Jaffna': [
    {
      id: 'T006',
      name: 'Yal Devi',
      type: 'Express',
      departure: '05:30',
      arrival: '12:10',
      duration: '6h 40m',
      from: 'Colombo Fort',
      to: 'Jaffna',
      classes: ['1st AC', '2nd Reserved', '3rd'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Kurunegala', 'Anuradhapura', 'Vavuniya', 'Jaffna']
    },
    {
      id: 'T007',
      name: 'Intercity Express',
      type: 'Intercity',
      departure: '13:00',
      arrival: '19:00',
      duration: '6h 00m',
      from: 'Colombo Fort',
      to: 'Jaffna',
      classes: ['1st AC', '2nd Reserved'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Kurunegala', 'Anuradhapura', 'Vavuniya', 'Jaffna']
    }
  ],
  'Colombo Fort-Galle': [
    {
      id: 'T008',
      name: 'Ruhunu Kumari',
      type: 'Express',
      departure: '07:00',
      arrival: '09:30',
      duration: '2h 30m',
      from: 'Colombo Fort',
      to: 'Galle',
      classes: ['1st AC', '2nd Reserved', '3rd'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      stops: ['Colombo Fort', 'Maradana', 'Panadura', 'Kalutara', 'Aluthgama', 'Bentota', 'Hikkaduwa', 'Galle']
    }
  ]
};