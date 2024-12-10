const IntroductionSection = () => {
    return (
      <div className="container mx-auto p-8">
        {/* Introduction */}
        <h1 className="text-3xl font-bold text-center mb-8">About Noor Foundation</h1>
        <p className="text-lg text-center mb-12">
        The NOOR education and Health Care Foundation has been developed to improve access and opportunity for all children of front line health workers, to education, health and wellbeing.NOOR education and Health Care Foundation believes in the equal opportunities for all children irrespective of their circumstances
        </p>
  xx
        {/* Goals, Vision, and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Goal Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Goals</h2>
            <p className="text-sm text-gray-600">
              Our goals focus on enhancing community engagement and improving overall quality of life.
            </p>
          </div>
  
          {/* Vision Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Vision</h2>
            <p className="text-sm text-gray-600">
              To create a sustainable future where everyone can thrive and contribute positively to society.
            </p>
          </div>
  
          {/* Mission Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Mission</h2>
            <p className="text-sm text-gray-600">
              Our mission is to empower individuals through education, resources, and community support.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default IntroductionSection;
  