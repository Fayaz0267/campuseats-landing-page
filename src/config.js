// Central place for everything that points at the EXISTING CampusEats app.
// Nothing here is hardcoded to production — set the VITE_* variables in .env.

const clean = (value, fallback) =>
  value !== undefined && String(value).trim() !== '' ? String(value).trim() : fallback;
const stripTrailingSlash = (url) => url.replace(/\/+$/, '');
const withLeadingSlash = (path) => (path.startsWith('/') ? path : `/${path}`);

export const APP_URL = stripTrailingSlash(clean(import.meta.env.VITE_APP_URL, 'http://localhost:3000'));
export const API_URL = stripTrailingSlash(clean(import.meta.env.VITE_API_URL, 'http://localhost:5000/api'));
export const USE_MOCK_AI = clean(import.meta.env.VITE_USE_MOCK_AI, 'true') !== 'false';

const LOGIN_PATH = withLeadingSlash(clean(import.meta.env.VITE_LOGIN_PATH, '/login'));
const START_PATH = withLeadingSlash(clean(import.meta.env.VITE_START_PATH, '/login'));

/** Links into the existing CampusEats frontend (full page navigation, no duplicate auth). */
export const LINKS = {
  login: `${APP_URL}${LOGIN_PATH}`,
  start: `${APP_URL}${START_PATH}`,
};
