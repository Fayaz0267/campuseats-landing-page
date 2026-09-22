import { API_URL, USE_MOCK_AI } from '../config.js';
import { DEMO_MENU } from '../data/demoMenu.js';

/**
 * Very small natural-language -> structured-filter extractor, used only
 * to drive the front-end demo animation. Swap this for the real
 * intent-parsing service before this ships against production data.
 */
function extractIntent(query) {
  const q = query.toLowerCase();
  const filters = [];

  if (/spicy|masala|chilli|chili/.test(q)) filters.push({ key: 'spicy', label: 'Spicy' });

  const priceMatch = q.match(/(?:under|below|less than)\s*₹?\s*(\d+)/);
  if (priceMatch) {
    const max = Number(priceMatch[1]);
    filters.push({ key: 'price', label: `Under ₹${max}`, max });
  }

  if (/quick|fast|hurry|asap|skip.*queue/.test(q)) filters.push({ key: 'quick', label: 'Quick pickup' });
  if (/\bveg\b(?!.*non)/.test(q)) filters.push({ key: 'veg', label: 'Vegetarian' });
  if (/non[- ]?veg|chicken|meat/.test(q)) filters.push({ key: 'nonveg', label: 'Non-vegetarian' });
  if (/budget|cheap|affordable/.test(q)) filters.push({ key: 'budget', label: 'Budget-friendly' });

  if (filters.length === 0) {
    filters.push({ key: 'general', label: 'Popular right now' });
  }

  return filters;
}

function applyFiltersToDemoMenu(filters) {
  return DEMO_MENU.filter((item) => {
    return filters.every((f) => {
      switch (f.key) {
        case 'spicy':
          return item.tags.includes('spicy');
        case 'price':
          return item.price <= f.max;
        case 'quick':
          return item.pickupMinutes <= 12;
        case 'veg':
          return item.veg;
        case 'nonveg':
          return !item.veg;
        case 'budget':
          return item.tags.includes('budget');
        default:
          return true;
      }
    });
  }).slice(0, 3);
}

/**
 * Resolves an AI food-search request.
 *
 * USE_MOCK_AI=true  -> runs the tiny extractor above against DEMO_MENU,
 *                       purely for demonstrating the interaction.
 * USE_MOCK_AI=false -> calls the real CampusEats backend. The backend
 *                       (not this landing page) owns menu truth: prices,
 *                       stock and availability always come from MongoDB.
 */
export async function runAiFoodSearch(query) {
  const filters = extractIntent(query);

  if (USE_MOCK_AI) {
    await new Promise((resolve) => setTimeout(resolve, 650));
    return { filters, results: applyFiltersToDemoMenu(filters), isDemo: true };
  }

  const res = await fetch(`${API_URL}/ai/food-search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`AI food search failed (${res.status})`);
  }

  const data = await res.json();
  // Expected shape from the real backend: { filters: [...], results: [...] }
  return { ...data, isDemo: false };
}
