import Image from "next/image";
import EP from '../public/images/nep.png';
import NP from '../public/images/nnp.png';
export default function processFlow(){
    return (
        <div className="justify-center mt-9 mb-9">
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto">
        
            <div className="text-indigo-500 mb-4 sm:mb-0 sm:mr-4">
            1
            </div>

            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <Image src={EP} alt="Image" className="w-20 h-20 rounded-full"/>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">Noor Education Program</h3>
                <p className="text-gray-600">In Our Noor Education Program , we provide education to student ageing from montessori to university grade . The fee is provided by Noor Education program whereas Noor Education and Healthcare program does not provide another expenses such as uniform , books , and other resources
However Noor Education and Health care foundation does provide these above resources in some cases where it is very necessary  
</p>
            </div>
            </div>
            <br/>
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto">
        
            <div className="text-indigo-500 mb-4 sm:mb-0 sm:mr-4">
            2
            </div>

            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <Image src={NP} alt="Image" className="w-20 h-20 rounded-full"/>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">Noor Nutrition Program</h3>
                <p className="text-gray-600">In Noor Nutrition program , the Noor Education and Health care Foundation provide best quality milk to school. Uptil now Noor Education and Health care has registered with one of school and is providing best quality milk to students.
 </p>
            </div>
            </div>
            <br/>
        </div>
    )
}