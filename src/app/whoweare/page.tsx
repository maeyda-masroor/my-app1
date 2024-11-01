// components/IntroductionSection.tsx
const IntroductionSection = () => {
    return (
      <div className="container mx-auto p-8">
        {/* Introduction */}
        <h1 className="text-3xl font-bold text-center mb-8">About Noor Education and Healthcare Foundation</h1>
        <p className="text-lg text-center mb-12">
        The NOOR education and Health Care Foundation has been developed to improve access and opportunity for all children of front line health workers, to education, health and wellbeing.NOOR education and Health Care Foundation believes in the equal opportunities for all children irrespective of their circumstances
        </p>
        
        {/* Goals, Vision, and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Goal Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Mission</h2>
            <p className="text-sm text-gray-600">
            To build a close knit community of academia, health care professionals, guardians and students with special e
mphasis on mental & physical health, special education, capacity building, & to implement education in underprivileged communities so that no one is left behind.

            </p>
          </div>
  
          {/* Vision Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Vision</h2>
            <p className="text-sm text-gray-600">
            The NOOR education and Health care Foundation is currently working in Pakistan and Kenya and has a vision to expand this scheme globally
            </p>
          </div>
  
          {/* Mission Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Goal</h2>
            <p className="text-sm text-gray-600">
            Raise awareness of the organisation and clarify its mission. • Connect the organisation's services with people who need them. • Activate possible donors and volunteers. • Engage followers with ongoing news and events. • Raise awareness of the organisation
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default IntroductionSection;
  