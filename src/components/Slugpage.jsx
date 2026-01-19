import { useState, useEffect } from 'react';
import supabase from '../supabase-clinet.js';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Standard for tables and tasklists

function ArticlesGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase
        .from('SavedMdBlogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        return;
      }
      setArticles(data);
    }
    fetchArticles();
  }, []);

  // Custom components to style Markdown elements
  const components = {
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    code: ({ children }) => <code className="bg-gray-100 p-1 rounded text-sm">{children}</code>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ul className="space-y-12">
        {articles.map((article) => (
          <li key={article.id} className="border-b pb-8">
            <header className="mb-4">
              <h2 className="text-4xl font-extrabold">{article.title}</h2>
              <small className="text-gray-500">
                {new Date(article.created_at).toLocaleDateString()}
              </small>
            </header>
            
            <div className="markdown-content text-left prose prose-slate max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                components={components}
              >
                {article.data}
              </ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesGrid;
