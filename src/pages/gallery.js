import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
    return (
        <Layout pageTitle="ISOI | Gallery">
            <NavOne />
            <PageHeader title="Gallery" />
            <Gallery />
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
