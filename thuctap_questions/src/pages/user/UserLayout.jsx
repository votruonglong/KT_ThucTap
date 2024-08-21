import React from 'react'
import Header from '../../components/Header'
import FooterMain from '../../components/FooterMain'

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <FooterMain />
        </>
    )
}

export default UserLayout