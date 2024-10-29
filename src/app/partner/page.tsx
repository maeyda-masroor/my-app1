// components/LogoGrid.tsx
import Image from 'next/image';

const logos = [
  { src: '/path/to/logo1.png', alt: 'Logo 1', description: 'Logo 1 Description' },
  { src: '/path/to/logo2.png', alt: 'Logo 2', description: 'Logo 2 Description' },
  { src: '/path/to/logo3.png', alt: 'Logo 3', description: 'Logo 3 Description' },
  { src: '/path/to/logo4.png', alt: 'Logo 4', description: 'Logo 4 Description' },
  { src: '/path/to/logo5.png', alt: 'Logo 5', description: 'Logo 5 Description' },
  { src: '/path/to/logo6.png', alt: 'Logo 6', description: 'Logo 6 Description' },
  { src: '/path/to/logo7.png', alt: 'Logo 7', description: 'Logo 7 Description' },
  { src: '/path/to/logo8.png', alt: 'Logo 8', description: 'Logo 8 Description' },
];

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {logos.map((logo, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4">
            <Image src={logo.src} alt={logo.alt} width={96} height={96} />
          </div>
          <p className="text-sm font-medium">{logo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
