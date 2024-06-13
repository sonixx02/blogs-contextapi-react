import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const Blogpage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext); // Destructure loading from context
  const blogId = location.pathname.split("/")[location.pathname.split("/").length - 1];
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const ress = await fetch(url);
      const data = await ress.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlog);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname, blogId]);

  // Add console logs to inspect values
  console.log("Blog:", blog);
  console.log("Related Blogs:", relatedBlog);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto my-8 p-4 bg-zinc-900 rounded shadow">
        <button
          onClick={() => navigation(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back
        </button>
        <div className="mt-4">
          {loading ? (
            <p className="text-center font-bold text-2xl text-white">Loading...</p>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2 className="text-2xl font-semibold mt-6">Related Blogs</h2>
              {Array.isArray(relatedBlog) && relatedBlog.length > 0 ? (
                relatedBlog.map((post) => (
                  <div key={post.id} className="mt-4">
                    <BlogDetails post={post} />
                  </div>
                ))
              ) : (
                <p className="text-center font-bold text-2xl">
                  No Related Blogs Found
                </p>
              )}
            </div>
          ) : (
            <p className="text-center font-bold text-2xl">No Blog Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
