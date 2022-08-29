import React from 'react'

const Welcome = (props) => {
	return (
		<>
			<div className="text-darkblue text-center">
				<div className="text-start w-[100px] py-[15px] mx-auto">
					<p className="text-[14px]">Welcome!</p>
					<h3 className="text-[20px]">{props.name}</h3>
				</div>
				<button className="bg-darkblue text-[18px] text-white px-[20px] rounded-md py-1">
					Create New <span className="text-[24px] font-[400]"> +</span>
				</button>
			</div>
		</>
	)
}

export default Welcome
