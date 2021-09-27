import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';



export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <Footer socialmedia="Connect with us thru:" address="b-47 gulhanes rahi"></Footer>
                <p>This is my home page</p>
            </Layout>
        </div>
    );
}