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
				class="w-full py-2 justify-between flex text-darkblue px-4 items-center"
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

			<div id="countmain" class="py-1 flex justify-end border-b">
				<div class="w-[35px] h-[35px] mx-2 text-white bg-green flex justify-center items-center rounded-full">
					<span>+{count}</span>
				</div>
				<button
					onClick={() => setCount(count + 1)}
					class="text-[24px] bg-darkblue w-[35px] h-[35px] mr-4 text-white  flex justify-center items-center rounded-full"
				>
					+
				</button>
			</div>
		</>
	)
}

export default TeamMem
