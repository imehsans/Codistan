import { Link, Outlet } from 'react-router-dom'
import Welcome from '../components/Welcome'
import TeamMem from './teamMembers/TeamMem'
import Yourprojects from './yourProject/YourProjects'
const Layout = () => {
	return (
		<div className="flex ">
			<nav className="bg-white w-[220px] h-[100vh] rounded-md mx-[12px] my-[12px]">
				<div className="py-[10px]">
					<Welcome name={'John Doe'} />
				</div>
				<div className="divide-y">
					<ul>
						<li className=" active:bg-lightgray">
							<Link to="/">
								<span
									className="text-darkgray text-[14px] active:text-darkblue
								"
								>
									Home
								</span>
							</Link>
						</li>
						<li>
							<Link to="./responsibilities">My Responsibilities</Link>
						</li>
						<li>
							<Link to="./observationFeedback">Observation & Feedback</Link>
						</li>
						<li>
							<Link to="./incidentMgt">Incident Management</Link>
						</li>
						<li>
							<Link to="./insepectionWeb">Audit and Inspection</Link>
						</li>
						<li>
							<Link to="./riskMgt">Risk Management</Link>
						</li>
						<li>
							<Link to="./learningMgt">Learning Management</Link>
						</li>
						<li>
							<Link to="./analytics">Performance Analytics</Link>
						</li>
					</ul>
					<div>
						<Yourprojects />
					</div>
					<div>
						<TeamMem />
					</div>
				</div>
			</nav>

			<Outlet />
		</div>
	)
}

export default Layout
