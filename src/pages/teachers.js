import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/Navthree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const TeachersPage = () => {
    return (
        <Layout pageTitle="ISOI | Teachers">
            <NavOne />
            <PageHeader title="Teachers" />
            <Teachers />
            <CallToActionTwo />
            <Footer />
        </Layout>
    );
};

export default TeachersPage;
