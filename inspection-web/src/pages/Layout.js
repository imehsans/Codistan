import { Link, Outlet } from 'react-router-dom'
import Welcome from '../components/Welcome'
import TeamMem from './teamMembers/TeamMem'
import Yourprojects from './yourProject/YourProjects'

const Layout = () => {
	return (
		<div className="flex w-full">
			<nav className="lg:w-2/12 bg-white w-[220px] h-[100vh] rounded-md mx-[12px] my-[12px]">
				<div className="py-[10px] pb-[25px]">
					<Welcome name={'John Doe'} />
				</div>
				<div className="divide-y divide-lightgray">
					<ul>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link to="/" className="flex items-center w-full">
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Home</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link
								to="./responsibilities"
								className="flex items-center w-full"
							>
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">My Responsibilities</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link
								to="./observationFeedback"
								className="flex items-center w-full"
							>
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Observation & Feedback</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link to="./incidentMgt" className="flex items-center w-full">
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Incident Management</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link to="./insepectionWeb" className="flex items-center w-full">
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Audit and Inspection</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link to="./riskMgt" className="flex items-center w-full">
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Risk Management</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link to="./learningMgt" className="flex items-center w-full">
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Learning Management</span>
							</Link>
						</li>
						<li className="py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer active:text-darkblue active:border-darkblue active:bg-lightgray">
							<Link to="./analytics" className="flex items-center w-full">
								<img
									className="w-[16px] my-1 h-[16px] mr-2"
									src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
									alt=""
								/>
								<span className="text-[14px]">Performance Analytics</span>
							</Link>
						</li>
					</ul>
					<div>
						<Yourprojects />
					</div>
					<div className='className="border-b divide-lightgray'>
						<TeamMem />
					</div>
				</div>
			</nav>

			<div className="lg:w-10/12">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
