import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from '../MainAPI';
import Header from './Header';
import Footer from './Footer';
import '../style/login.css';

const Login_Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            const response = await fetch(LoginAPI);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const users = await response.json();
            const user = users.find(u => u.email === email && u.password === password);
    
            if (!user) {
                throw new Error('Emai hoặc Password không đúng'); 
            }
    
            localStorage.setItem('token', user.id); 
            localStorage.setItem('userEmail', email);
            navigate('/'); 
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <>
            <Header />
            <div className='login-container'>
                <div className="content-login">
                    <h2 className='logo'>Questions web</h2>
                    <div className='text-sci'>
                        <h2>Welcome! <br /><span>To Our New Website.</span></h2>
                        <p>welcome welcome welcome welcome welcome welcome welcome welcome welcome</p>
                        <div className="social-icon">
                            <a href='#'><i className="fab fa-instagram"></i></a>
                            <a href='#'><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div className="logreg-box">
                    <div className="form-box login">
                        <form onSubmit={handleLogin}>
                            <h2>Sign in</h2>
                            <div className="input-box">
                                <span className='icon'><i className="fas fa-envelope"></i></span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Email'
                                />
                            </div>
                            <div className="input-box">
                                <span className='icon'><i className="fas fa-lock"></i></span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='Password'
                                />
                            </div>
                            {error && <p className="error">{error}</p>}
                            
                            <div className="remember-forgot">
                                <label>
                                    <input type='checkbox' />Remember me
                                </label>
                                <a href='#'> Forgot password</a>
                            </div>
                            <button type='submit' disabled={isLoading}>
                                {isLoading ? 'Loading...' :'Sign in'}
                            </button>
                            <div className="login-register">
                                <p>Don't have an account? <a href='#' className='register-link'>Sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login_Page;
