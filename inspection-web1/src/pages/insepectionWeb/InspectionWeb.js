import React from 'react'
import AuditInspection from './components/AuditInspection'
import InspectionBy from './components/InspectionBy'
import InspectionDetails from './components/InspectionDetails'
import InspectionScore from './components/InspectionScore'
import InspectionSummaryHeading from './components/InspectionSummaryHeading'

const InspectionWeb = () => {
	return (
		<div>
			<AuditInspection />
			<div className="hidden lg:block">
				<InspectionDetails />
			</div>
			<div className="mr-0 md:mr-[12px] md:my-[12px] bg-white">
				<InspectionSummaryHeading />
				<InspectionScore />
				<InspectionBy />
				<div className="flex justify-center lg:justify-end w-full lg:w-1/2 py-[12px] lg:py-[24px]">
					<button className="text-center lg:text-end bg-green rounded-md mr-[0px] lg:mr-[50px] text-white font-[500] py-[12px] px-[100px] lg:px-[120px]">
						Print
					</button>
				</div>
			</div>
		</div>
	)
}

export default InspectionWeb
