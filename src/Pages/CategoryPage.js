import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pageination';
import Header from '../components/Header';

const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);

    return (
        <div className="bg-zinc-900 min-h-screen">
            <Header />
            <div className=" mx-auto my-8 p-4 bg-zinc-900 text-white rounded shadow">
                <div className="mb-4 ml-3 ">
                    <button
                        onClick={() => navigation(-1)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Back
                    </button>
                </div>
                <h2 className="text-2xl font-semibold mb-2">
                    Blogs On <span className="text-blue-500">{category}</span>
                </h2>
                <Blogs />
                <Pagination />
            </div>
        </div>
    );
};

export default CategoryPage;
