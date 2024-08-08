import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',  
  timeout: 1000,
});

export const getWorks = async () => {
  try {
    const response = await apiClient.get('/works');
    return response.data;
  } catch (error) {
    console.error("Error fetching works", error);
    throw error;
  }
};
