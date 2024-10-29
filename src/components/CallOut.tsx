export default function CallOut(){
    return (
        <div className="px-0 py-10 bg-red-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                <div className=" p-4">
                <h2 className="text-white text-[26px] uppercase leading-[30px];">Change Their World. Change Yours. This changes everything.</h2>
                </div>
                <div className=" p-4">
                <div className="text-[0] text-center p-0">
					<a href="contact.html" className="inline-block align-top min-w-[213px] text-sm font-[bold] uppercase text-white m-0 pt-[11px] pb-3 px-[15px] border-2 border-solid border-white">Become Volunteer</a>
                    
					<span className="text-[#ec1d25] font-[bold] uppercase  before:content-[''] before:inline-block before:align-middle before:w-7 before:h-px after:content-[''] after:inline-block after:align-middle after:w-7 after:h-px">
						<span className=" inline-block align-middle w-[43px] h-[43px] text-center leading-[43px] text-xs rounded-[50%] bg-white">Or</span>
					</span>

					<a href="contact.html" className="inline-block align-top min-w-[213px] text-sm font-[bold] uppercase text-white m-0 pt-[11px] pb-3 px-[15px] border-2 border-solid border-white">Donate For cause</a>
				</div>
                </div>
        </div>
        </div>
        </div>
    )
}