import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import UserContainer from "./pages/user/UserContainer";
import AdminContainer from "./pages/admin/AdminContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Support from "./components/Support";
import Login_Page from "./components/Login";
import WelcomeComponent from "./components/welcome";
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { messages } from './utils/messages.js';

function App() {
	const language = useSelector((state) => state.language);
	return (
		<>
			<IntlProvider
				locale={language}
				messages={messages[language]}
			>
				<Router>
					<ToastContainer />
					<Routes>
						<Route
							path="/"
							element={
								<UserLayout>
									<UserContainer />
								</UserLayout>
							}
						/>
						<Route
							path="/admin"
							element={
								<AdminLayout>
									<AdminContainer />
								</AdminLayout>
							}
						/>
						<Route
							path="/welcome"
							element={
								<WelcomeComponent></WelcomeComponent>
							}
						/>
						<Route path="/support" element={<Support></Support>} />
						<Route path="/login" element={<Login_Page />} />
					</Routes>
				</Router>
			</IntlProvider>
		</>
	);
}

export default App;
