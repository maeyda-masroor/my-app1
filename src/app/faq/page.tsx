"use client"
// pages/index.tsx
import React from 'react';
import Accordion from '../../components/Accordin';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Accordion Example</h2>
        <Accordion title="Accordion Item 1" content="This is the content for item 1." />
        <Accordion title="Accordion Item 2" content="This is the content for item 2." />
        <Accordion title="Accordion Item 3" content="This is the content for item 3." />
      </div>
    </div>
  );
};

export default HomePage;
