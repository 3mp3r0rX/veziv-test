import React, { useEffect, useState } from 'react';
import { Work } from '../models/Work';
import { WorkList } from '../components/WorkList';
import { WorkForm } from '../components/WorkForm';
import { fetchWorks, addWork, deleteWork } from '../services/workService';

export const PortfolioPage: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const loadWorks = async () => {
      try {
        const fetchedWorks = await fetchWorks();
        setWorks(fetchedWorks);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };

    loadWorks();
  }, []);

  const handleAddWork = async (newWork: Work) => {
    try {
      const addedWork = await addWork(newWork);
      setWorks([...works, addedWork]);
    } catch (error) {
      console.error('Error adding work:', error);
    }
  };

  const handleDeleteWork = async (id: string) => {
    try {
      await deleteWork(id);
      setWorks(works.filter(work => work.id !== id));
    } catch (error) {
      console.error('Error deleting work:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
      <WorkForm onSubmit={handleAddWork} />
      <WorkList works={works} onDelete={handleDeleteWork} />
    </div>
  );
};
