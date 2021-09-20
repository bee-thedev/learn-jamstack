import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default () => {
    return (
        <div className="index">
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is my home page</p>
            </Layout>
            <Link to="/photography">Photography Page here</Link>
        </div>
    );
}