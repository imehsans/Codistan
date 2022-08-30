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
			<InspectionDetails />
			<div className="mr-[12px] my-[12px] bg-white">
				<InspectionSummaryHeading />
				<InspectionScore />
				<InspectionBy />
				<div className="flex justify-end w-1/2 py-[24px]">
					<button className="text-end bg-green rounded-md mr-[50px] text-white font-[500] py-[12px] px-[120px]">
						Print
					</button>
				</div>
			</div>
		</div>
	)
}

export default InspectionWeb
