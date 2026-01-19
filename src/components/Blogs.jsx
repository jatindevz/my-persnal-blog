import { useState, useEffect } from 'react'
import supabase  from './../supabase-clinet'
import ReactMarkdown from 'react-markdown';

function ArticlesGrid() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase
        .from('SavedMdBlogs')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error:', error)
        return
      }

      setArticles(data)
    }

    fetchArticles()
  }, [])

  return (
    <ul>
        <h1>hi there is there any bug??</h1>
      {articles.map((article) => (
        <li key={article.id}>
          <h3>{article.title}</h3>
           <ReactMarkdown>{content}</ReactMarkdown>;

          {/* <p>{article.data}</p> */}
          <small>{new Date(article.created_at).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  )
}

export default ArticlesGrid
