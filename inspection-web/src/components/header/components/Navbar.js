import React from 'react'

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-11/12 w-full mx-auto text-white">
			<div className="header_container">
				<img
					className="w-[150px] h-[35px] 2xl:w-[218.3px] 2xl:h-[41.46px]"
					src="https://user-images.githubusercontent.com/34196609/187050239-9ae7a383-6a7a-469b-be22-cbeb96ebf67e.png"
					alt="Logo"
				/>
			</div>
			<div className="flex justify-between w-1/2">
				<div className="bg-purple">
					<input
						type="text"
						class="bg-purple borer-[1px] rounded-1 border-white font-[400] px-4 py-2"
						placeholder="Search"
					/>
				</div>

				<div>Settings</div>

				<div>notification</div>
			</div>
		</div>
	)
}

export default Navbar
