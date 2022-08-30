import React from 'react'

const InspectionBy = () => {
	return (
		<div className="bg-white border-t-8 divide-y divide-lightgray border-darkgray">
			<ul className="mx-0 md:px-0 px-[12px] md:mx-[24px] lg:mx-0 lg:pl-[25px] text-[14px] m-0 p-0  flex flex-col lg:flex-row flex-wrap divide-y divide-lightgray lg:divide-y-0 ">
				<li className="py-[15px] lg:py-[25px] border-b border-lightgray lg:border-0  items-center mr-0 lg:mr-[80px] w-full lg:w-2/6 flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Inspection By:</span>
					<span className="text-secondary font-[400]">Shafiq Khattak</span>
				</li>
				<li className=" py-[15px] lg:py-[25px] border-b border-lightgray lg:border-0 items-center mr-0 lg:mr-[80px] w-full lg:w-2/6 flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Submitted to:</span>
					<span className="text-darkgray text-[14px] w-[200px] font-[400]">
						<select class="block px-[10px] py-[9px] w-full  rounded-sm border border-gray focus:ring-darkpurple focus:border-green ">
							<option selected>Waseem ALi</option>
							<option value="US">Usman Syed</option>
							<option value="CA">Abc</option>
						</select>
					</span>
				</li>
			</ul>
			<ul className="mx-0 md:px-0 px-[12px] md:mx-[24px] lg:mx-0 lg:pl-[25px] text-[14px] m-0 p-0 flex flex-wrap divide-y divide-lightgray lg:divide-y-0">
				<li className="border-b border-lightgray lg:border-0 mr-0 lg:mr-[80px] w-full py-[15px] lg:py-[25px] flex justify-between lg:justify-start">
					<span className="mr-0 lg:mr-[24px] font-[500]">Status:</span>
					<span className="text-secondary font-[400]">Pending Approval</span>
				</li>
			</ul>
		</div>
	)
}

export default InspectionBy
