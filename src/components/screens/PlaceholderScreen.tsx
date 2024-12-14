import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useMenu } from '../../contexts/MenuContext';

interface PlaceholderScreenProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function PlaceholderScreen({ 
  title, 
  description,
  icon
}: PlaceholderScreenProps) {
  const { setActiveMenuItem } = useMenu();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => setActiveMenuItem(null)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>
      
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        {icon && <div className="mx-auto w-16 h-16 text-indigo-600 mb-4">{icon}</div>}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
        <p className="mt-4 text-sm text-gray-500">This feature is coming soon!</p>
      </div>
    </div>
  );
}