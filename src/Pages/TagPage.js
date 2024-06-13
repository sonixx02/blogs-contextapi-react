import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pageination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className="bg-zinc-900 text-white  min-h-screen">
            <Header />
            <div className=" mx-auto my-8 p-4 bg-zinc-900 rounded shadow">
                <div className="mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigation(-1)}
                    >
                        Back
                    </button>
                </div>
                <h2 className="text-2xl mb-4">
                    Blog Tagged <span className="text-blue-500">#{tag}</span>
                </h2>
                <Blogs />
                <Pagination />
            </div>
        </div>
    );
};

export default TagPage;
