import React from 'react'

const InspectionScore = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row mb-[35px]">
			<div className="w-full border divide-y lg:w-1/3 border-lightgray divide-lightgray">
				<div className="py-[30px] flex justify-between items-center w-full px-[30px]">
					<span className="mr-[24px] font-[500]">Inspection Score:</span>
					<div>
						<span className="min-w-[120px min-h-[16px] relative ">
							<span className="rounded-xl text-white bg-gradient-to-r from-green via-[#fc9121] to-lightgreen px-[50px]">
								74%
							</span>
							<div className="text-right">
								<div class="absolute right-5 top-[18px] w-0 h-0 border-l-[6px] border-l-white border-t-[10px] border-t-black border-r-[6px] border-r-white bg-white"></div>
								<span className="w-full text-[12px] text-right">
									Not Satisfactory
								</span>
							</div>
						</span>
					</div>
				</div>
				<div className="px-[25px] lg:px-[30px] h-auto lg:h-[500px] lg:scroll-mb-0.5 lg:overflow-y-auto">
					<ul className="list-decimal list-outside pl-[15px]">
						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Physical condition of body is good & sound.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-green">Yes</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-green w-5 h-5"
										/>
									</div>
								</span>
							</div>
							<span className="text-[12px] w-8/12 text-secondary">
								Dust and Dirt shall be removed.
							</span>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Power cable is free from damages and connections are made
									using industrial plug.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-lightgreen">No</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-lightgreen w-5 h-5"
										/>
									</div>
								</span>
							</div>
							<span className="text-[12px] text-secondary">
								Industrial Plug was found broken which needs to be replaced.
							</span>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Junction box of motor is free from defects.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-lightgreen">No</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-lightgreen w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									On/off switch is properly insulated.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-green">Yes</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-green w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Machine is properly grounded and resistance of less than 5 ohm
									is achieved.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-secondary">N/A</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-secondary w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Protective guard is installed on rotary parts of machine.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-green">Yes</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-green w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Hose and needle is tightly connected with motor.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-green">Yes</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-green w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Needle should be free from damages.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-green">Yes</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-green w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Machine is properly grounded and resistance of less than 5 ohm
									is achieved.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-green">Yes</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-green w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>

						<li className="py-2">
							<div className="flex items-center justify-between">
								<span className="text-[14px] w-8/12">
									Physical condition of body is good & sound.
								</span>
								<span className="w-3/12 text-right">
									<div className="flex items-center justify-end">
										<label class="mr-2 text-[14px] text-lightgreen">No</label>
										<input
											id="link-radio"
											type="radio"
											value=""
											class="accent-lightgreen w-5 h-5"
										/>
									</div>
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex items-center justify-center w-full lg:w-2/3">
				<img
					className="w-10/12 h-10/12"
					src="https://user-images.githubusercontent.com/34196609/187050261-6a7a57c2-c2aa-4e9a-bf3b-643e71ad775f.png"
					alt="machine_image"
				/>
			</div>
		</div>
	)
}

export default InspectionScore
