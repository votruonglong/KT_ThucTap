import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default AdminLayout;
