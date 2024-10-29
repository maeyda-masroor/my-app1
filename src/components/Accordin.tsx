// components/Accordion.tsx
"use client"
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Using icons for plus/minus

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <span className="text-xl text-gray-500">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
