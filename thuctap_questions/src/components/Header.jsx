import React from 'react';
import '../style/header.scss';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchQuestion_Modal from './SearchQuestion';
import _, { debounce } from 'lodash';
import { MainAPI } from "../MainAPI";
import Loader from './Loader';


const Header = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [listQuestions, setListQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [question, setQuestion] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const checkIsDesktop = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };

        fetchQuestions();

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
        navigate('/admin');
    }

    const handleredirect_user = () => {
        navigate('/');
    }

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Đổi trạng thái menu khi click
    }

    const handleredirect_support = () => {
        navigate('/support')
    }

    const fetchQuestions = async () => {
        try {
            const response = await fetch(MainAPI);
            if (!response.ok) {
                console.log('No data');
                return;
            }
            const data = await response.json();
            setListQuestions(data);
            console.log('Dữ liệu câu hỏi:', data);
        } catch (error) {
            console.error('Lỗi khi fetch dữ liệu:', error);
        }
    }



    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // const handleOnsearch = debounce(async (event) => {
    //     const term = event.target.value.trim().toLowerCase();
    //     console.log("Search term:", term);

    //     setIsLoading(true); // Start loading
    //     console.log("Loading started");

    //     try {
    //         if (term) {
    //             const result = listQuestions.filter(item =>
    //                 removeAccents(item.question).toLowerCase().includes(removeAccents(term))
    //             );
    //             setFilteredQuestions(result.length ? result : []);
    //             setIsModalOpen(true);
    //         } else {
    //             setFilteredQuestions(listQuestions);
    //             setIsModalOpen(false);
    //         }
    //         setIsMenuOpen(true);
    //     } catch (error) {
    //         console.error('Lỗi khi tìm kiếm:', error);
    //     } finally {
    //         setIsLoading(false); // End loading
    //         console.log("Loading ended");
    //     }
    // }, 300);

    const handleOnsearch = debounce(async (event) => {
        const term = event.target.value.trim().toLowerCase();
        console.log("Search term:", term);

        if (term) {
            setIsLoading(true); // Bắt đầu hiển thị Loader
            console.log("Loading started");
        }

        try {
            if (term) {
                const result = listQuestions.filter(item =>
                    removeAccents(item.question).toLowerCase().includes(removeAccents(term))
                );
                setFilteredQuestions(result.length ? result : []);
                setIsModalOpen(true);
            } else {
                setFilteredQuestions(listQuestions);
                setIsModalOpen(false);
            }
            setIsMenuOpen(true);
        } catch (error) {
            console.error('Lỗi khi tìm kiếm:', error);
        } finally {
            if (term) {
                setIsLoading(false); // Kết thúc hiển thị Loader
                console.log("Loading ended");
            }
        }
    }, 300);


    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isLoading, setIsLoading] = useState(false);
    { isLoading && <Loader /> }
    return (
        <>
            {isDesktop ? (
                <div className='home-header-container'>
                    <div className='header-left'>
                        <img className='header-logo' src={logo} alt="Logo" />
                    </div>
                    <div className='header-center'>
                        <form>
                            <input
                                className='form-control'
                                placeholder='search questions...'
                                onChange={(event) => handleOnsearch(event)}
                            />
                        </form>
                    </div>
                    <div className='header-right'>
                        <div className='support'>
                            <i className="fas fa-question-circle">
                                <span
                                    onClick={handleredirect_support}
                                >Support</span>
                            </i>
                        </div>
                        <div className="dropdown">
                            <span>Login</span>
                            <div className="dropdown-content">
                                <span onClick={handleredirect_admin}>
                                    <i className="fas fa-user-cog"></i>&nbsp;&nbsp;Admin
                                </span>
                                <span onClick={handleredirect_user}>
                                    <i className="fas fa-user"></i>&nbsp;&nbsp;Intern
                                </span>
                            </div>
                        </div>
                        <div className='logout'>
                            Logout&nbsp;<i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>
            ) : (
                <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Amazing Tech Logo" />
                        </a>
                        <form>
                            <input
                                className='form-control'
                                placeholder='search questions...'
                                onChange={(event) => handleOnsearch(event)}
                            />
                        </form>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-hamburger"
                            aria-expanded={isMenuOpen}
                            onClick={handleMenuToggle} // Thêm sự kiện nhấp chuột
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
                            </svg>
                        </button>
                        <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-hamburger"> {/* Hiển thị hoặc ẩn menu dựa trên trạng thái */}
                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <li>
                                    <a href="#" className="hover-link-menu">
                                        <span>
                                            <i className="fas fa-question-circle"></i>&nbsp;&nbsp;Support
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin" className="hover-link-menu">
                                        <span><i className="fas fa-user-cog"></i>&nbsp;&nbsp;Admin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover-link-menu">
                                        <span><i className="fas fa-user"></i>&nbsp;&nbsp;Intern</span>
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
            )}

            {isLoading && <Loader />} {/* Show loader when loading */}

            {isModalOpen && !isLoading && (
                <SearchQuestion_Modal
                    questions={filteredQuestions}
                    onClose={closeModal}
                />
            )}
        </>
    );
}
export default Header;
