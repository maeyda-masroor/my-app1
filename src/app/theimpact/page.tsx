// pages/index.tsx
"use client"
import dynamic from 'next/dynamic';
import { NextPage } from 'next';

// Import the PieChart component with dynamic import for client-side rendering
const PieChart = dynamic(() => import('../../components/PieChart'))

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/2  p-20">
    <h1 className="text-xl font-semibold mb-2">Uptil now program like education program and nutrition program are introduced but it is planed to introduced also another programs such as Noor technical program Noor Healthcare program and Noor earlychildhood program</h1>
    </div>
    <div className="w-full md:w-1/2 p-4">
    <PieChart/>
    </div>
    </div>
  );
};

export default Home;
