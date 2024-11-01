"use client"
export default function Newsletter(){
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1h1E5xEGbyYzejVE8_BkqMkrdgpDT8WZ6/view?usp=sharing', '_blank');
    };
    return (
        <div className="container mx-auto p-8">
            <center><button onClick={handleClick} className="transform transition duration-300 hover:bg-red-700 hover:scale-300">
                click on this to view Newsletter 
            </button></center>
        </div>
    )
}