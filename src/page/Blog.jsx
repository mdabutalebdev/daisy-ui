import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React in 2025",
      description:
        "Learn the latest features in React 19, hooks best practices, and how to build blazing fast UIs with modern tools.",
      image: "https://images.pexels.com/photos/17890606/pexels-photo-17890606.jpeg",
    },
    {
      id: 2,
      title: "Tailwind CSS Tips & Tricks",
      description:
        "From responsive layouts to custom utilities, explore how Tailwind CSS makes your development faster and cleaner.",
      image: "https://images.pexels.com/photos/32304047/pexels-photo-32304047.jpeg",
    },
    {
      id: 3,
      title: "Next.js for Beginners",
      description:
        "Understand routing, data fetching, and server-side rendering with Next.js to build production-ready applications.",
      image: "https://images.pexels.com/photos/32847638/pexels-photo-32847638.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Latest <span className="text-indigo-600">Blogs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest articles on frontend development, React, Tailwind
            CSS, and other modern web technologies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
