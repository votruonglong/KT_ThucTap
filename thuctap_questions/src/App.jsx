import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import UserContainer from "./pages/user/UserContainer";
import AdminContainer from "./pages/admin/AdminContainer";

function App() {
	return (
		<Router>
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
			</Routes>
		</Router>
	);
}

export default App;
