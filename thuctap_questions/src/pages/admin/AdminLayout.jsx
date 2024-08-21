import React from "react";
import Header from "../../components/Header";
import FooterMain from "../../components/FooterMain";

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <FooterMain />
        </>
    );
};

export default AdminLayout;
