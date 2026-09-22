// DEMO DATA ONLY.
//
// In production the AI demo below must never invent menu items, prices,
// or availability. This file stands in for a response from the real
// backend (GET/POST via src/services/aiSearch.js) so the landing page
// can show the interaction end-to-end before that endpoint exists.

export const DEMO_MENU = [
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    price: 90,
    veg: true,
    pickupMinutes: 10,
    tags: ['spicy', 'quick', 'budget'],
    icon: '🥞',
  },
  {
    id: 'paneer-roll',
    name: 'Paneer Roll',
    price: 120,
    veg: true,
    pickupMinutes: 12,
    tags: ['spicy', 'quick', 'budget'],
    icon: '🌯',
  },
  {
    id: 'chicken-roll',
    name: 'Chicken Roll',
    price: 140,
    veg: false,
    pickupMinutes: 15,
    tags: ['spicy', 'budget'],
    icon: '🌯',
  },
  {
    id: 'veg-thali',
    name: 'Veg Thali',
    price: 130,
    veg: true,
    pickupMinutes: 18,
    tags: ['filling'],
    icon: '🍱',
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    price: 60,
    veg: true,
    pickupMinutes: 5,
    tags: ['quick', 'budget'],
    icon: '🥤',
  },
];
