import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Analytics from './pages/analytics/Analytics'
import Home from './pages/home/Home'
import IncidentManagement from './pages/incidentMgt/IncidentManagement'
import InspectionWeb from './pages/insepectionWeb/InspectionWeb'
import Layout from './pages/Layout'
import LearningManagment from './pages/learningMgt/LearningManagment'
import NoPage from './pages/noPage/NoPage'
import ObservationAndFeedback from './pages/observationFeedback/ObservationAndFeedback'
import MyResponsibilities from './pages/responsibilities/MyResponsibilities'
import RiskManagment from './pages/riskMgt/RiskManagment'
import AlpaProject from './pages/yourProject/alpha/AlpaProject'
import BetaProject from './pages/yourProject/beta/BetaProject'

function App() {
	return (
		<div className="">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/insepectionWeb" element={<InspectionWeb />} />
						<Route path="/responsibilities" element={<MyResponsibilities />} />
						<Route
							path="/observationFeedback"
							element={<ObservationAndFeedback />}
						/>
						<Route path="/incidentMgt" element={<IncidentManagement />} />
						<Route path="/riskMgt" element={<RiskManagment />} />
						<Route path="/learningMgt" element={<LearningManagment />} />
						<Route path="/analytics" element={<Analytics />} />
						<Route path="/alpha" element={<AlpaProject />} />
						<Route path="/beta" element={<BetaProject />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
