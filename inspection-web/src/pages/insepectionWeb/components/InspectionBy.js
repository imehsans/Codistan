import React from 'react'

const InspectionBy = () => {
	return (
		<div className="mr-[12px]  bg-white divide-y divide-lightgray">
			<ul className="pl-[25px] text-[14px] m-0 p-0  py-[25px]  flex flex-wrap items-center">
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Inspection By:</span>
					<span className="text-secondary font-[400]">Shafiq Khattak</span>
				</li>
				<li className="mr-[80px] flex items-center">
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
			<ul className="pl-[25px] text-[14px] m-0 p-0  py-[25px]  flex flex-wrap ">
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Status:</span>
					<span className="text-secondary font-[400]">Pending Approval</span>
				</li>
			</ul>
		</div>
	)
}

export default InspectionBy
