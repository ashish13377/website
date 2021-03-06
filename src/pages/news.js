import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/Navthree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = () => {
    return (
        <Layout pageTitle="ISOI | Blog">
            <NavOne />
            <PageHeader title="News" />
            <News />
            <Footer />
        </Layout>
    );
};

export default NewsPage;
