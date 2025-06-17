import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-all bg-white ">
      <img src="/public/tempmailUi.png" alt={blog.title || "Blog image"} />
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-600">{blog.description}</p>

      <Link
        to={`/blog/${blog.slug}`}
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
