import React from 'react';
import CourseCard from '../components/CourseCard';

const Home = () => {
  return (
    <div>
      <section className="text-center my-8">
        <h2 className="text-4xl font-bold text-white">Your Learning Persona</h2>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CourseCard title="Auto Layout" progress={3} total={8} category="UI Design" />
        <CourseCard title="3D Face Character" progress={4} total={8} category="3D Modelling" />
        <CourseCard title="Motion Animation" progress={7} total={8} category="Animation" />
        <CourseCard title="Motion Animation" progress={7} total={8} category="Animation" />
      </section>
    </div>
  );
};

export default Home;
