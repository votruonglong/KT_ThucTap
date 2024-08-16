import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{ fontSize: '30px', textAlign: 'center', margin: '100px', border: '1px solid black', width: 'auto', height: '500px' }}>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default UserLayout