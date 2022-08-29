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
				class="flex text-darkblue px-4 py-2  items-center focus:bg-dark"
				type="button"
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

			<div id="dropdownDivider" class="z-40 w-44 rounded  shadow">
				<ul class="py-1 text-sm" aria-labelledby="dropdownDividerButton">
					<li>
						<a href="#home" class="block py-2 px-4">
							<Link to="./alpha">Alpha Project</Link>
						</a>
					</li>
					<li>
						<a href="#home" class="block py-2 px-4 ">
							<Link to="./beta">Beta Project</Link>
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Yourprojects
