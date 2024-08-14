import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseDetail = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseResponse = await axios.get(`/api/courses/${courseId}`);
        setCourse(courseResponse.data);

        const certificatesResponse = await axios.get(`/api/courses/${courseId}/certificates`);
        setCertificates(certificatesResponse.data);
      } catch (error) {
        console.error("There was an error fetching the course or certificates!", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">{course.name}</h2>
      <p className="text-lg text-gray-400 mb-4">{course.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((certificate) => (
          <div key={certificate.certificateId} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <img src={certificate.imageUrl} alt={certificate.name} className="mb-4 w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold">{certificate.name}</h3>
            <p className="text-sm text-gray-400">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
