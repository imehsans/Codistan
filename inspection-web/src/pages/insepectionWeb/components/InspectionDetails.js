import React from 'react'

const InspectionDetails = () => {
	return (
		<div className="mr-[12px] rounded-md bg-white divide-y divide-lightgray">
			<ul className="pl-[25px] text-[14px] m-0 p-0  py-[25px]  flex flex-wrap ">
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Inspection ID:</span>
					<span className="text-secondary font-[400]">112233</span>
				</li>
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Identification Number:</span>
					<span className="text-secondary font-[400]">EV-01</span>
				</li>
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Project:</span>
					<span className="text-secondary font-[400]">Truck Loading Silo</span>
				</li>
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Location:</span>
					<span className="text-secondary font-[400]">Silo-2</span>
				</li>
			</ul>
			<ul className="pl-[25px] text-[14px] m-0 p-0  py-[25px]  flex flex-wrap ">
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Due Date:</span>
					<span className="text-secondary font-[400]">
						Mar 8, 2021 10:30 am
					</span>
				</li>
				<li className="mr-[80px] flex">
					<span className="mr-[24px] font-[500]">Inspection Date:</span>
					<span className="text-secondary font-[400]">
						Mar 8, 2021 10:30 am
					</span>
				</li>
			</ul>
		</div>
	)
}

export default InspectionDetails
