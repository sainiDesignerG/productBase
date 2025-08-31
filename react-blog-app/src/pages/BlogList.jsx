import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  // Dummy data for now
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React Development',
      excerpt: 'Learn the fundamentals of React and how to build modern web applications with this comprehensive guide.',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      readTime: '5 min read',
      category: 'React'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts You Should Know',
      excerpt: 'Dive deep into closures, prototypes, and other advanced JavaScript concepts that every developer should master.',
      date: '2024-01-12',
      author: 'Mike Chen',
      readTime: '8 min read',
      category: 'JavaScript'
    },
    {
      id: 3,
      title: 'Building Responsive Web Designs with Tailwind CSS',
      excerpt: 'Discover how to create beautiful, responsive layouts using Tailwind CSS utility classes.',
      date: '2024-01-10',
      author: 'Emma Davis',
      readTime: '6 min read',
      category: 'CSS'
    },
    {
      id: 4,
      title: 'Understanding API Integration in Modern Web Apps',
      excerpt: 'Learn best practices for integrating REST APIs and handling data in your web applications.',
      date: '2024-01-08',
      author: 'Alex Rodriguez',
      readTime: '7 min read',
      category: 'API'
    },
    {
      id: 5,
      title: 'State Management Solutions for React Applications',
      excerpt: 'Explore different state management options and when to use them in your React projects.',
      date: '2024-01-05',
      author: 'Lisa Wang',
      readTime: '10 min read',
      category: 'React'
    },
    {
      id: 6,
      title: 'Optimizing Web Performance: Tips and Tricks',
      excerpt: 'Learn practical techniques to improve your website\'s loading speed and overall performance.',
      date: '2024-01-03',
      author: 'David Kim',
      readTime: '9 min read',
      category: 'Performance'
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover insights, tutorials, and best practices from our community of developers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500 ml-auto">{blog.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;