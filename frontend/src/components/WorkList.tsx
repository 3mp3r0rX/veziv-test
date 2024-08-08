import React from 'react';

interface Work {
  id?: string; 
  title: string;
  description: string;
  imageUrl: string;
  clientLink?: string;
  status: string;
}

interface WorkListProps {
  works: Work[];
  onDelete: (id: string) => void;
}

export const WorkList: React.FC<WorkListProps> = ({ works, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {works.map((work) => (
        work.status === 'visible' && (
          <div key={work.id} className="bg-white shadow rounded overflow-hidden">
            <img src={work.imageUrl} alt={work.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{work.title}</h3>
              <p className="text-gray-600">{work.description}</p>
              {work.clientLink && (
                <a
                  href={work.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Client
                </a>
              )}
              {work.id && (
                <button
                  onClick={() => onDelete(work.id as string)} // Assert work.id as string
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        )
      ))}
    </div>
  );
};
