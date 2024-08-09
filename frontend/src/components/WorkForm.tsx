import React, { useState } from 'react';
import { Work } from '../models/Work';

interface WorkFormProps {
    onSubmit: (work: Work) => void;
}

export const WorkForm: React.FC<WorkFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [clientLink, setClientLink] = useState('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImageUrl(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        onSubmit({
            id: Date.now().toString(),
            title,
            description,
            imageUrl,
            clientLink,
            status: 'visible',
        });
    };

    return (
        <div className="p-4 bg-white shadow-md rounded">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="file"
                onChange={handleImageUpload}
                className="w-full p-2 mb-4"
            />
            <input
                type="text"
                value={clientLink}
                onChange={e => setClientLink(e.target.value)}
                placeholder="Client Link"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
};
