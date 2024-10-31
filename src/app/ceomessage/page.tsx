// components/CeoMessage.tsx
import Image from 'next/image';
import CEO from '../public/images/ceo.png';
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
          <h2 className="text-xl font-semibold mb-2">Message from the CEO</h2>
          <p className="text-sm text-gray-600">
          Dear friends
          In the heart of our mission at Noor Education & Healthcare Foundation is a commitment to leave no one behind, blending education and healthcare into a tapestry of support for the underprivileged. Our vision is ambitious yet grounded in the belief that sustainable upliftment in education and health can transform communities from the inside out.Through our work, we strive to light the way for those in need, connecting them with essential services and inspiring a wave of support from donors, volunteers, and advocates. Our initiatives, from enhancing children's nutrition to advocating for the education of frontline workers' children and promoting girls' education, are more than programs; they are lifelines to a brighter future.. I invite you to join us in this noble cause. Your support, whether through donations, volunteering, or simply spreading the word, is invaluable. Together, we are not just dreaming of a better tomorrow; we are actively building it, one life at a time. Thank you for standing with us, for believing in our mission, and for being an integral part of our story of hope and transformation. with deepest appreciation
          <br/><span className='italic text-red-600 text-xl'>MS.humaira Shahid</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
