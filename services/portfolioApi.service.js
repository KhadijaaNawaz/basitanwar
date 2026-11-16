import axios from 'axios';
import { buildUrl, getUrl, API_ENDPOINTS } from '@/config/api.config';

/**
 * Portfolio API Service
 * Handles all portfolio-related API calls
 */
class PortfolioApiService {
  /**
   * Fetch all portfolio images
   * @returns {Promise<Array>} Array of image portfolio items
   */
  async getImages() {
    try {
      const url = getUrl('portfolioImages');
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio images:', error);
      throw new Error('Failed to fetch portfolio images');
    }
  }

  /**
   * Fetch all portfolio videos
   * @returns {Promise<Array>} Array of video portfolio items
   */
  async getVideos() {
    try {
      const url = getUrl('portfolioVideos');
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio videos:', error);
      throw new Error('Failed to fetch portfolio videos');
    }
  }

  /**
   * Fetch portfolio items by type
   * @param {string} type - Media type: 'image' or 'video'
   * @param {boolean} isActive - Filter by active status (default: true)
   * @returns {Promise<Array>} Array of portfolio items
   */
  async getByType(type, isActive = true) {
    try {
      const url = buildUrl(API_ENDPOINTS.portfolio);
      const response = await axios.get(url, {
        params: {
          type,
          is_active: isActive
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio by type:', error);
      throw new Error('Failed to fetch portfolio items');
    }
  }

  /**
   * Fetch all portfolio items (images and videos)
   * @param {boolean} isActive - Filter by active status (default: true)
   * @returns {Promise<Array>} Array of all portfolio items
   */
  async getAll(isActive = true) {
    try {
      const url = buildUrl(API_ENDPOINTS.portfolio);
      const response = await axios.get(url, {
        params: {
          is_active: isActive
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching all portfolio items:', error);
      throw new Error('Failed to fetch portfolio items');
    }
  }

  /**
   * Fetch a single portfolio item by ID
   * @param {number} id - Portfolio item ID
   * @returns {Promise<Object>} Portfolio item details
   */
  async getById(id) {
    try {
      const url = buildUrl(`${API_ENDPOINTS.portfolio}${id}/`);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio item:', error);
      throw new Error('Failed to fetch portfolio item');
    }
  }

  /**
   * Sort portfolio items by display order
   * @param {Array} items - Portfolio items to sort
   * @returns {Array} Sorted items
   */
  sortByDisplayOrder(items) {
    return [...items].sort((a, b) => {
      // First sort by display_order
      if (a.display_order !== b.display_order) {
        return a.display_order - b.display_order;
      }
      // Then by created_at (newest first)
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }
}

// Export singleton instance
export default new PortfolioApiService();
