import React from 'react'
import '../style/header.scss';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkIsDesktop = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };

        checkIsDesktop();

        const handleResize = () => {
            checkIsDesktop();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            {isDesktop == true ? (
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
            )

                :

                (<nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Amazing Tech Logo" />
                        </a>
                        <div className='header-center'>
                            <form>
                                <input
                                    className='form-control'
                                    placeholder='search questions...' />
                            </form>
                        </div>
                        <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full" id="navbar-hamburger">
                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <li>
                                    <a href="#" className="hover-link-menu">
                                        <span>
                                            <i className="fas fa-question-circle">  </i>&nbsp;&nbsp;Support
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin" className="hover-link-menu">
                                        <span
                                        ><i className="fas fa-user-cog"></i>&nbsp;&nbsp;Admin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover-link-menu">
                                        <span
                                        ><i className="fas fa-user"></i>&nbsp;&nbsp;Intern</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover-link-menu">
                                        <i className="fas fa-sign-out-alt">&nbsp;&nbsp;</i>Logout

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                )

            }
        </>
    )

}

export default Header