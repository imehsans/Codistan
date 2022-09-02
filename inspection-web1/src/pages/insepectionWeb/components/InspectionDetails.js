import React from 'react'

const InspectionDetails = () => {
	return (
		<div className="w-full mr-0 lg:mr-[12px] rounded-0 lg:rounded-md bg-white divide-y divide-lightgray">
			<ul className="w-full lg:pl-[25px] px-[12px] text-[14px] m-0 p-0   flex flex-wrap divide-y divide-lightgray lg:divide-y-0 ">
				<li className="lg:w-4/12 xl:w-3/12 w-full mr-0 lg:mr-[0px]  py-[15px]  lg:py-[25px] flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Inspection ID:</span>
					<span className="text-secondary font-[400]">112233</span>
				</li>
				<li className="lg:w-4/12 xl:w-3/12 w-full mr-0 lg:mr-[0px]  py-[15px]  lg:py-[25px] flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Identification Number:</span>
					<span className="text-secondary font-[400]">EV-01</span>
				</li>
				<li className="lg:w-4/12 xl:w-3/12 w-full mr-0 lg:mr-[0px]  py-[15px]  lg:py-[25px] flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Project:</span>
					<span className="text-secondary font-[400]">Truck Loading Silo</span>
				</li>
				<li className="lg:w-4/12 xl:w-3/12 w-full mr-0 lg:mr-[0px]  py-[15px]  lg:py-[25px] flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Location:</span>
					<span className="text-secondary font-[400]">Silo-2</span>
				</li>
			</ul>
			<ul className="w-full lg:pl-[25px] px-[12px] text-[14px] m-0 p-0   flex flex-wrap divide-y divide-lightgray lg:divide-y-0  ">
				<li className="lg:w-4/12 xl:w-3/12 w-full mr-0 lg:mr-[0px]  py-[15px]  lg:py-[25px] flex justify-between lg:justify-start">
					<span className="mr-[24px] font-[500]">Due Date:</span>
					<span className="text-secondary font-[400]">
						Mar 8, 2021 10:30 am
					</span>
				</li>
				<li className="lg:w-4/12 xl:w-3/12 w-full mr-0 lg:mr-[0px]  py-[15px]  lg:py-[25px] flex justify-between lg:justify-start">
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
