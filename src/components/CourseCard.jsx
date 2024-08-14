import React from 'react';
import ProgressBar from './ProgressBar';

const CourseCard = ({ title, progress, total, category, imageUrl, instructorName }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="mb-4 w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{category}</p>
      <p className="text-sm text-gray-400 mb-4">Instructor: {instructorName}</p>
      <ProgressBar progress={progress} total={total} />
      <p className="text-sm mt-2">{progress}/{total} completed</p>
    </div>
  );
};

export default CourseCard;
