// components/IntroductionSection.tsx
const IntroductionSection = () => {
    return (
      <div className="container mx-auto p-8">
        {/* Introduction */}
        <h1 className="text-3xl font-bold text-center mb-8">About Noor Education and Healthcare Foundation</h1>
        <p className="text-lg text-center mb-12">
        The NOOR education and Health Care Foundation has been developed to improve access and opportunity for all children of front line health workers, to education, health and wellbeing.NOOR education and Health Care Foundation believes in the equal opportunities for all children irrespective of their circumstances
        </p>
        <h1 className="text-3xl font-bold text-center mb-8">Visioner Behind Noor Educaation and Healthcare Foundation</h1>
        <p className="text-lg text-center mb-12">
        Noor Education & Healthcare Foundation was set up to take forward (Late) Begum Noor Jehan Ishrat’s vision for educating those less fortunate, with a focus on girls and women empowerment through education. She was a great advocate for lifelong learning and for providing a helping hand to those who were financially challenged and unable to afford to educate their children. She topped in her matriculation exam but got married at young age. And because of the domestic responsibilities couldn’t continue her education, but with due course of time she privately did her graduation and then got admission in LLB. She got married at the age of 16 passed her matriculation.and devoted her young years bringing up her children. As soon as the children were grown up, she decided to pursue her passion for education as a mature student and enrolled herself for intermediate college. She went on to get her Bachelor of Arts (BA) and proceeded to enrol for L.L.B. to become a lawyer. As a commitment to her passion for Lifelong learning, she went on to acquire an “Early Childhood Education Montessori “Diploma. She believed that education was something no-one could take away from you and gave a person great self-esteem, self-confidence, and economic emancipation and self-sufficiency. Noor Education & Healthcare Foundation embodies her ethos and values and strives to realise her dream of ‘educate to emancipate and empower.’
        </p>
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
  