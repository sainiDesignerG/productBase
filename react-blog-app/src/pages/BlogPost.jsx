import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  // Dummy data for now
  const post = {
    id: 1,
    title: 'Getting Started with React Development: A Comprehensive Guide',
    content: `React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamental concepts that every React developer should know.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It's maintained by Facebook and a community of individual developers and companies.

## Why Choose React?

There are several reasons why React has become so popular:

1. **Component-Based Architecture**: React encourages building reusable UI components
2. **Virtual DOM**: Efficient rendering and updates
3. **Unidirectional Data Flow**: Predictable state management
4. **Large Ecosystem**: Extensive libraries and tools available

## Getting Started

To begin your React journey, you'll need:

- Node.js and npm installed
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

## Your First Component

Here's a simple React component:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

## State and Props

Understanding props and state is crucial for React development. Props are read-only data passed from parent to child components, while state is mutable data managed within a component.

## Hooks

React Hooks, introduced in React 16.8, allow you to use state and other React features in functional components. The most commonly used hooks are:

- useState: For managing component state
- useEffect: For side effects like API calls
- useContext: For consuming context

## Best Practices

1. Keep components small and focused
2. Use meaningful names for components and variables
3. Avoid deep nesting of components
4. Use PropTypes for type checking
5. Write tests for your components

## Conclusion

React is a powerful tool for building modern web applications. With its component-based architecture and extensive ecosystem, it continues to be a top choice for developers worldwide. Keep practicing, and you'll soon be building amazing applications with React!

Remember, the key to mastering React is consistent practice and staying updated with the latest best practices.`,
    author: 'Sarah Johnson',
    date: 'January 15, 2024',
    readTime: '5 min read',
    category: 'React',
    tags: ['React', 'JavaScript', 'Web Development', 'Tutorial']
  };

  return (
    <div className="py-12">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full mr-4">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-4">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-500 text-sm">Published on {post.date}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm">Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
            } else if (paragraph.startsWith('```')) {
              return (
                <pre key={index} className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">
                  <code>{paragraph.replace(/```jsx?|```/g, '').trim()}</code>
                </pre>
              );
            } else if (paragraph.trim() === '') {
              return <br key={index} />;
            } else {
              return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
            }
          })}
        </div>

        <footer className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <Link
              to="/blogs"
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              ← Back to Blog Posts
            </Link>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                Previous Post
              </button>
              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                Next Post
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;