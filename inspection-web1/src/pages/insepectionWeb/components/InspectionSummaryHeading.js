import React from 'react'
import InspectionDetails from './InspectionDetails'
const InspectionSummaryHeading = () => {
	return (
		<div className="py-[32px]">
			<div className="text-center text-darkblue">
				<h1 className="uppercase font-[500] text-[18px]">
					Electrical Vibrator
				</h1>
				<p className="text-[14px] py-[8px] font-[400]">Inspection Summary</p>
			</div>
			<div className="block lg:hidden">
				<InspectionDetails />
			</div>
		</div>
	)
}

export default InspectionSummaryHeading
