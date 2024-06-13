import React from 'react';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pageination';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="bg-zinc-900 text-white min-h-screen">
            <Header />
            <div className=" mx-auto bg-zinc-900 rounded shadow">
                <Blogs />
                <Pagination />
            </div>
        </div>
    );
};

export default Home;
