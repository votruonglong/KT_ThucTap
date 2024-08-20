import "../style/login.css";

const Login_Page = () => {
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
						<form action="#">
							<h2>Sign in</h2>
							<div className="input-box">
								<span className="icon">
									<i className="fas fa-envelope"></i>
								</span>
								<input type="email" required />
								<label>Email</label>
							</div>
							<div className="input-box">
								<span className="icon">
									<i className="fas fa-lock"></i>
								</span>
								<input type="password" required />
								<label>Password</label>
							</div>
							<div className="remember-forgot">
								<label>
									<input type="checkbox" />
									Remember me
									<a href="#">Forgot password</a>
								</label>
							</div>
							<button type="submit">Sign in</button>
							<div className="login-register">
								<p>
									Don&apos;t have an account ?
									<a href="#" className="register-link">
										Sign up
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login_Page;
