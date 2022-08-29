import React, { useState } from 'react'

const TeamMem = () => {
	let [show, setShow] = useState(true)
	let [count, setCount] = useState(3)

	const toggleDropDown = () => {
		show ? showData() : hideData()
	}

	const showData = () => {
		document.getElementById('countmain').classList.add('hidden')
		return setShow(false)
	}

	const hideData = () => {
		document.getElementById('countmain').classList.remove('hidden')
		return setShow(true)
	}

	return (
		<>
			<button
				onClick={() => toggleDropDown()}
				id="dropdownDividerButton"
				data-dropdown-toggle="dropdownDivider"
				class="flex text-darkblue px-4 py-2  items-center focus:bg-dark"
				type="button"
			>
				Team Members{' '}
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

			<div id="countmain" class="z-40 w-44 rounded  shadow">
				<a href="#home" class="block py-2 px-4">
					+{count}
				</a>
				<a
					onClick={() => setCount(count + 1)}
					href="#home"
					class="text-[30px] font-[700] block bg-darkblue text-white py-2 px-4 "
				>
					+
				</a>
			</div>
		</>
	)
}

export default TeamMem
