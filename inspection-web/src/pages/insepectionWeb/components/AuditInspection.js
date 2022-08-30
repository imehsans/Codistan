import React from 'react'

const AuditInspection = () => {
	return (
		<div className=" hidden lg:block pl-[25px] mr-[12px] py-[12px] rounded-md bg-white my-[12px]">
			<div className="w-full">
				<h1 className="text-darkblue text-[30px] pb-[20px]">
					Audit and Inspection
				</h1>
			</div>
			<div>
				<ul className="flex">
					<li className="flex items-center mr-10 text-darkgray text-[14px]">
						<span>Inspection</span>
						<span className="pl-4">
							<img
								src="https://user-images.githubusercontent.com/34196609/187238899-726e1834-b435-4438-adab-dfe267da1a8f.png"
								alt=""
							/>
						</span>
					</li>
					<li className="flex items-center mr-10 text-darkgray text-[14px]">
						<span>In Progress</span>
						<span className="pl-4">
							<img
								src="https://user-images.githubusercontent.com/34196609/187238899-726e1834-b435-4438-adab-dfe267da1a8f.png"
								alt=""
							/>
						</span>
					</li>
					<li className="flex items-center mr-10 text-darkgray text-[14px]">
						<span>Inspection#112233</span>
						<span className="pl-4">
							<img
								src="https://user-images.githubusercontent.com/34196609/187238899-726e1834-b435-4438-adab-dfe267da1a8f.png"
								alt=""
							/>
						</span>
					</li>
					<li className="text-green text-[14px] font-[500]">
						<a href="#h">
							<span>Electrical Vibrator - EV04</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AuditInspection
