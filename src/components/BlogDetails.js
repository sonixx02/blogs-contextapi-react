import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  const imgSrc = `${post.img}&t=${new Date().getTime()}`;

  return (
    <div className="bg-zinc-900 p-4 rounded shadow-md mb-6 relative">
      <NavLink to={`/blog/${post.id}`} className="text-2xl font-semibold text-blue-500 mb-2 block">
        {post.title}
      </NavLink>
      <p className="text-white">
        By <span className="font-semibold">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="text-blue-500">
          {post.category}
        </NavLink>
      </p>
      <p className="text-white mt-2">Posted on {post.date}</p>
      <img src={imgSrc} alt={post.title} className="absolute top-0 right-0 rounded-md mr-4 mt-4" style={{ maxWidth: "150px" }} />
      <p className="mt-4 text-white">{post.content}</p>
      <div className="mt-4">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="inline-block bg-zinc-900 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
