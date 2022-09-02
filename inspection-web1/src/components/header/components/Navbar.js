import React from 'react'

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-11/12 mx-auto text-white">
			<div className="flex justify-center block w-full md:hidden">
				<img
					className="w-[130px]"
					src="https://user-images.githubusercontent.com/34196609/187050289-6aa7210f-9aa1-4473-8060-bf6bb8606625.png"
					alt="Logo"
				/>
			</div>
			<div className="hidden md:block">
				<img
					className="w-[218.3px] h-[41.46px]"
					src="https://user-images.githubusercontent.com/34196609/187050239-9ae7a383-6a7a-469b-be22-cbeb96ebf67e.png"
					alt="Logo"
				/>
			</div>
			<div className="hidden md:flex justify-between w-[350px]">
				<div className="flex items-center border border-white rounded-md bg-purple">
					<input
						id="searchbox"
						type="text"
						class="bg-purple borer-[1px] focus:border-none focus:outline-none rounded-1 border-white font-[400] px-[16px] py-[1px] text-[18px] w-[200px] placeholder:text-white"
						placeholder="Search"
					/>
					<div className="w-[40px] h-[40px] flex justify-center">
						<a
							href="#searchbox"
							className="flex items-center justify-center w-full h-full"
						>
							<img
								className="w-[16px] h-[16px]"
								src="https://user-images.githubusercontent.com/34196609/187065957-1e20e340-cedc-45fa-9c3e-a85a33728d05.png"
								alt="Search Icon"
							/>
						</a>
					</div>
				</div>

				<div>
					<a
						href="#searchbox"
						className="flex items-center justify-center w-full h-full"
					>
						<img
							className="w-[25px] h-[25px]"
							src="https://user-images.githubusercontent.com/34196609/187065949-70bd1fa9-a05e-49cd-b174-ebed43c1371c.png"
							alt="Settings Icon"
						/>
					</a>
				</div>

				<div>
					<a
						href="#searchbox"
						className="flex items-center justify-center w-full h-full"
					>
						<img
							className="w-[25px] h-[25px]"
							src="https://user-images.githubusercontent.com/34196609/187065942-b6f665c3-9a3d-42e9-a941-04eaaa72e39c.png"
							alt="Notification Icon"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
