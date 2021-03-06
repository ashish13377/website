import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const FaqPage = () => {
    return (
        <Layout pageTitle="ISOI | FAQ">
            <NavOne />
            <PageHeader title="FAQ" />
            <Faq />
            <Footer />
        </Layout>
    );
};

export default FaqPage;
