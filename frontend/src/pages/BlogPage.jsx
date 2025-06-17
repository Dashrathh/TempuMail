import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../data/Data";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  const { slug } = useParams();
  const blog = BlogData.find((b) => b.slug === slug);

  if (!blog) return <h2 className="text-center">Blog not found</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Helmet>
        <title>{blog.title} | Tempmail.sbs</title>
        <meta name="description" content={blog.description} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <img src="/image.png" alt={blog.title} />
      <p className="text-sm text-gray-500 mb-6">Published on {blog.date}</p>
      <div
        className="text-lg leading-relaxed text-gray-800 blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      {/* <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
      >
        Go to Home
      </Link> */}
      {/* <p className="text-lg leading-relaxed text-gray-800">{blog.content}</p>  */}
    </div>
  );
};

export default BlogPage;
