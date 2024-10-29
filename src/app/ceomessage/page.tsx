// components/CeoMessage.tsx
import Image from 'next/image';

const CeoMessage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
        {/* CEO Icon/Image */}
        <div className="flex-shrink-0">
          <Image
            src="/path/to/ceo-icon.png" // Replace with your CEO's icon/image path
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
            Welcome to our organization! We are committed to delivering excellence and fostering a culture of innovation.
            Together, we can achieve remarkable things and make a meaningful impact in our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
