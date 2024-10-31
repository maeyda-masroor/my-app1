"use client"
// pages/index.tsx
import React from 'react';
import Accordion from '../../components/Accordin';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Accordion Example</h2>
        <Accordion title=" How many program are there in Noor education and healthcare foundation" content=" There are basically 5 program namely Noor Education program . Noor Healthcare program , Noor technical program , Noor early childhood program , Noor nutrition program“
" />
        <Accordion title="  If I made an appointment , how soon will I receive the reply " content="With 24 hours" />
        <Accordion title="   Is Noor Education And HealthCare program is benefiting all people
" content="Yes, frontline workers are supported and family in poverty are supported by Noor Education and Health care program in children’s education and healthcare" />
       <Accordion title="   Is Noor Education And HealthCare program is benefiting all people
" content="Yes, frontline workers are supported and family in poverty are supported by Noor Education and Health care program in children’s education and healthcare" />
 <Accordion title="   Is Noor Education And HealthCare program is benefiting all people
" content="Yes, frontline workers are supported and family in poverty are supported by Noor Education and Health care program in children’s education and healthcare" />
 <Accordion title="   Is Noor Education And HealthCare program is benefiting all people
" content="Yes, frontline workers are supported and family in poverty are supported by Noor Education and Health care program in children’s education and healthcare" />
 <Accordion title="   Is Noor Education And HealthCare program is benefiting all people
" content="Yes, frontline workers are supported and family in poverty are supported by Noor Education and Health care program in children’s education and healthcare" />
 <Accordion title="  Will my children , how long will get help from Noor Education and Helathcare Foundation

" content="Yes, frontline workers are supported and family in poverty are supported by Noor Education and Health care program in children’s education and healthcare" />
 <Accordion title="  How to apply for scholarship program or donation \
" content="There is a form provided on the website instruction are given on steps for procedure on website
" />

      </div>
    </div>
  );
};

export default HomePage;
