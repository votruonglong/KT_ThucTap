import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import UserContainer from "./pages/user/UserContainer";
import AdminContainer from "./pages/admin/AdminContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Support from "./components/Support";
import Login_Page from "./components/Login";

function App() {
	return (
		<>
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
					<Route path="/support" element={<Support></Support>} />
					<Route path="/login" element={<Login_Page />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
