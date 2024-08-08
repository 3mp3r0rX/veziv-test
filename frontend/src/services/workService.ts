import { Work } from '../models/Work';

export const fetchWorks = async (): Promise<Work[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/works');
    if (!response.ok) {
      throw new Error('Failed to fetch works');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching works:', error);
    throw error;
  }
};

export const addWork = async (work: Work): Promise<Work> => {
  try {
    const response = await fetch('http://localhost:3000/api/works', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(work),
    });
    if (!response.ok) {
      throw new Error('Failed to add work');
    }
    return response.json();
  } catch (error) {
    console.error('Error adding work:', error);
    throw error;
  }
};

export const deleteWork = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/works/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete work');
    }
  } catch (error) {
    console.error('Error deleting work:', error);
    throw error;
  }
};
