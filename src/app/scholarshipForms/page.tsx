import Link from "next/link"
export default function scholarshipForms(){
    return (
        <div className="justify-center mt-9 mb-9">
            <div className="mb-9 items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto">
                <h1 className="">Scholarship Forms</h1>
                <Link href="/scholarship_1" className="text-blue-600 hover:text-blue-800 font-semibold">Link 1</Link>
                <br/>
                <h1 className="">Scholarship Forms</h1>
                <Link href="/scholarship_2" className="text-blue-600 hover:text-blue-800 font-semibold">Link 2</Link>
            </div>
            <div className="mb-9 items-center sm:items-start p-6 bg-yellow-100 rounded-lg shadow-lg max-w-lg mx-auto">
            <p>Or You can download it</p>
        </div>
            <div className="items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto">
                <h1 className="">Scholarship Forms</h1>
                <Link href="https://drive.google.com/file/d/1h1E5xEGbyYzejVE8_BkqMkrdgpDT8WZ6/view?usp=sharing" className="text-blue-600 hover:text-blue-800 font-semibold">Link 1</Link>
                <br/>
                <h1 className="">Scholarship Forms</h1>
                <Link href="https://drive.google.com/file/d/1h1E5xEGbyYzejVE8_BkqMkrdgpDT8WZ6/view?usp=sharing" className="text-blue-600 hover:text-blue-800 font-semibold">Link 2</Link>
            </div>

        </div>
    )
}