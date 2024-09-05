import React from 'react';
import ScientificCalculator from '../components/ScientificCalculator';


const Home: React.FC = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-3xl text-gray-100  p-3 rounded-lg shadow-lg my-6">
  Scientific Calculator
</h1>

      <ScientificCalculator />
    </div>
  );
};

export default Home;