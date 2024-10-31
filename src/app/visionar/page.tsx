// components/CeoMessage.tsx
import Image from 'next/image';
import CEO from '../public/images/vision.jpeg';
const CeoMessage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
        {/* CEO Icon/Image */}
        <div className="flex-shrink-0">
          <Image
            src={CEO} // Replace with your CEO's icon/image path
            alt="CEO Icon"
            width={100}  // Adjust size as needed
            height={100} // Adjust size as needed
            className="rounded-full" // Makes the image circular
          />
        </div>
        
        {/* CEO Message */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Visioner Behind Noor Educaation and Healthcare Foundation</h2>
          <p className="text-sm text-gray-600">
          Noor Education & Healthcare Foundation was set up to take forward (Late) Begum Noor Jehan Ishrat’s vision for educating those less fortunate, with a focus on girls and women empowerment through education. She was a great advocate for lifelong learning and for providing a helping hand to those who were financially challenged and unable to afford to educate their children. She topped in her matriculation exam but got married at young age. And because of the domestic responsibilities couldn’t continue her education, but with due course of time she privately did her graduation and then got admission in LLB. She got married at the age of 16 passed her matriculation.and devoted her young years bringing up her children. As soon as the children were grown up, she decided to pursue her passion for education as a mature student and enrolled herself for intermediate college. She went on to get her Bachelor of Arts (BA) and proceeded to enrol for L.L.B. to become a lawyer. As a commitment to her passion for Lifelong learning, she went on to acquire an “Early Childhood Education Montessori “Diploma. She believed that education was something no-one could take away from you and gave a person great self-esteem, self-confidence, and economic emancipation and self-sufficiency. Noor Education & Healthcare Foundation embodies her ethos and values and strives to realise her dream of ‘educate to emancipate and empower.’
          <br/><span className='italic text-red-600 text-xl text-center'>"educate to emancipate and empower"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;