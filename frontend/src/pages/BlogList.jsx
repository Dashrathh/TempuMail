import React from "react";
// import Blogs from "../data/Data.js";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet";
import Blogs from "../data/Data.js";

function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Helmet>
        <title>Blog | Tempmail.sbs</title>
        <meta
          name="description"
          content="Learn about temporary email, privacy, and spam protection."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Our Latest Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
