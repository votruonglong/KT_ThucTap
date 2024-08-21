import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../MainAPI";
import "../style/login.css";

const Login_Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch(LoginAPI);
			if (!response.ok) {
				throw new Error("Failed to fetch user data");
			}

			const users = await response.json();
			const user = users.find((u) => u.email === email && u.password === password);

			if (!user) {
				throw new Error("Emai hoặc Password không đúng");
			}

			localStorage.setItem("token", user.id);
			localStorage.setItem("userEmail", email);
			navigate("/admin");
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="login-container">
				<div className="content-login">
					<h2 className="logo">Questions web</h2>
					<div className="text-sci">
						<h2>
							Welcome ! <br /> <span>To Our New Website.</span>
						</h2>
						<p>
							welcome welcome welcome welcome welcome welcome welcome welcome welcome
						</p>
						<div className="social-icon">
							<a href="#">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="#">
								<i className="fab fa-facebook"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="logreg-box">
					<div className="form-box login">
						<form onSubmit={handleLogin} style={{ width: "100%" }}>
							<h2>Sign in</h2>
							<div className="input-box">
								<span className="icon">
									<i className="fas fa-envelope"></i>
								</span>
								<input
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
								/>
								<label>Email</label>
							</div>
							<div className="input-box">
								<span className="icon">
									<i className="fas fa-lock"></i>
								</span>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									placeholder="Mật khẩu"
								/>
								<label>Mật khẩu</label>
							</div>
							{error && <p className="error">{error}</p>}
							<button className="btn-login" type="submit" disabled={isLoading}>
								{isLoading ? "Loading..." : "Đăng nhập"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login_Page;
