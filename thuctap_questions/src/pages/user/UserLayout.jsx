import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer'

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default UserLayout