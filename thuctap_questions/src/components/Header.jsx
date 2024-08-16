import React from 'react'
import '../style/header.scss';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleredirect_admin = () => {
        navigate('/admin ')
    }

    const handleredirect_user = () => {
        navigate('/')
    }
    handleredirect_admin();
    return (
        <>
            <div className='home-header-container'>
                <div className='header-left'>
                    <img className='header-logo' src={logo} />
                </div>
                <div className='header-center'>
                    <form>
                        <input
                            className='form-control'
                            placeholder='search questions...' />

                    </form>
                </div>
                <div className='header-right'>
                    <div className='support'>
                        <i className="fas fa-question-circle">
                            <span>
                                Support
                            </span>
                        </i>
                    </div>

                    <div className="dropdown">
                        <span>Login</span>
                        <div className="dropdown-content">
                            <span
                                onClick={handleredirect_admin}
                            ><i className="fas fa-user-cog"></i>&nbsp;&nbsp;Admin</span>
                            <span
                                onClick={handleredirect_user}
                            ><i className="fas fa-user"></i>&nbsp;&nbsp;Intern</span>
                        </div>
                    </div>
                    <div className='logout'
                    >Logout&nbsp;<i className="fas fa-sign-out-alt"></i></div>

                </div>
            </div>
        </>
    )
}

export default Header