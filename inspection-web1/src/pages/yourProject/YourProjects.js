import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Yourprojects = () => {
	let [show, setShow] = useState(true)

	const toggleDropDown = () => {
		show ? showData() : hideData()
	}

	const showData = () => {
		document.getElementById('dropdownDivider').classList.add('hidden')
		return setShow(false)
	}

	const hideData = () => {
		document.getElementById('dropdownDivider').classList.remove('hidden')
		return setShow(true)
	}

	return (
		<>
			<button
				onClick={() => toggleDropDown()}
				id="dropdownDividerButton"
				data-dropdown-toggle="dropdownDivider"
				class="w-full py-2 justify-between flex text-darkblue px-4 items-center"
			>
				Your Projects{' '}
				<svg
					class="ml-2 w-4 h-4"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>

			<div id="dropdownDivider" className="py-1">
				<ul aria-labelledby="dropdownDividerButton">
					<li className="pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
						<Link
							to="./alpha"
							className="flex items-center w-full py-1 text-gray900 active:text-darkblue "
						>
							<img
								className="w-[16px] h-[16px]"
								src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
								alt=""
							/>
							<span className="pl-2">Alpha Project</span>
						</Link>
					</li>

					<li className="pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
						<Link
							to="./beta"
							className="flex items-center w-full py-1 text-gray900 active:text-darkblue "
						>
							<img
								className="w-[16px] h-[16px]"
								src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
								alt=""
							/>
							<span className="pl-2 text-gray900 active:text-darkblue">
								Beta Project
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Yourprojects
