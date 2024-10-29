// pages/index.tsx
"use client"
import dynamic from 'next/dynamic';
import { NextPage } from 'next';

// Import the PieChart component with dynamic import for client-side rendering
const PieChart = dynamic(() => import('../../components/PieChart'))

const Home: NextPage = () => {
  return (
    <div>
      <h1>My Pie Chart</h1>
      <PieChart/>
    </div>
  );
};

export default Home;
