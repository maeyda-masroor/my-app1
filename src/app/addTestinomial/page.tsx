import Rating from "../../components/Rating";
export default function AddTestinomial(){
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
            <h1 className="mb-5 block text-base font-bold text-[#000] sm:text-xl">
                    We value Your Opinion
            </h1>
            <form>
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                How would you rate your overall experience?
            </label>
            <Rating />
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
               Kindly take a moment to tell us what you think?
            </label>
            <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Enter your text here..."
            ></textarea>
            </form>
            <div>
                <button
                    className="hover:shadow-form w-full rounded-md bg-[#FF0000] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Share my Feedback
                </button>
            </div>
            </div>
        </div>
    )
}