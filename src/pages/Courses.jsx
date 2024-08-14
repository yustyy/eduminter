import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses'); // API URL'nizi buraya ekleyin
        setCourses(response.data);
      } catch (error) {
        console.error("There was an error fetching the courses!", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.courseId}
            title={course.name}
            progress={course.progress} // Bunu API'den alacaksınız, örnek olarak gösteriyorum
            total={8} // Örnek olarak 8 verildi, gerçek veriyi API'den alabilirsiniz
            category={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
