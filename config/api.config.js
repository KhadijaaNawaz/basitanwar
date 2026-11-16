import apiConfig from './api.config.json';

/**
 * Base API URL for all endpoints
 */
export const BASE_URL = apiConfig.BASE_URL;

/**
 * API endpoint paths
 */
export const API_ENDPOINTS = apiConfig.endpoints;

/**
 * Build a full URL from an endpoint path
 * @param {string} endpoint - The endpoint path (e.g., 'posts/')
 * @param {string} baseUrl - Optional base URL (defaults to BASE_URL)
 * @returns {string} Full URL
 */
export const buildUrl = (endpoint, baseUrl = BASE_URL) => {
  // Remove leading slash from endpoint if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  // Ensure base URL doesn't have trailing slash
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  return `${cleanBaseUrl}/${cleanEndpoint}`;
};

/**
 * Get URL for a specific endpoint by key
 * @param {string} key - Endpoint key from API_ENDPOINTS
 * @returns {string} Full URL
 */
export const getUrl = (key) => {
  const endpoint = API_ENDPOINTS[key];
  if (!endpoint) {
    throw new Error(`Unknown endpoint key: ${key}`);
  }
  return buildUrl(endpoint);
};

export default {
  BASE_URL,
  API_ENDPOINTS,
  buildUrl,
  getUrl
};
