import React from "react";

const articles = [
  {
    id: 1,
    title: "Mastering React Hooks: A Comprehensive Guide",
    author: "Jatin",
    href: "https://yourblog.com/mastering-react-hooks",
    img: "https://via.placeholder.com/800x480?text=React+Hooks",
    span: 2,
  },
  {
    id: 2,
    title: "JavaScript ES6 Features You Should Know",
    author: "Jatin",
    href: "https://yourblog.com/javascript-es6-features",
    img: "https://via.placeholder.com/400x240?text=ES6+Features",
  },
  {
    id: 3,
    title: "Building a Full-Stack App with Node.js and React",
    author: "Jatin",
    href: "https://yourblog.com/full-stack-node-react",
    img: "https://via.placeholder.com/800x480?text=Full-Stack+App",
    desc: "Learn how to create a complete application from backend to frontend.",
  },
  {
    id: 4,
    title: "Optimizing Performance in Web Applications",
    author: "Jatin",
    href: "https://yourblog.com/optimizing-web-performance",
    img: "https://via.placeholder.com/400x240?text=Performance+Optimization",
    desc: "Tips and tricks to make your sites load faster.",
  },
  {
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    author: "Jatin",
    href: "https://yourblog.com/intro-to-typescript",
    img: "https://via.placeholder.com/400x240?text=TypeScript+Intro",
  },
  {
    id: 6,
    title: "Debugging Techniques in Modern Browsers",
    author: "Jatin",
    href: "https://yourblog.com/debugging-techniques",
    img: "https://via.placeholder.com/400x240?text=Debugging+Tools",
  },
  {
    id: 7,
    title: "Exploring AI in Programming: Tools and Trends",
    author: "Jatin",
    href: "https://yourblog.com/ai-in-programming",
    img: "https://via.placeholder.com/400x240?text=AI+Trends",
  },
];

const ArticlesGrid = () => {
  return (
    <div className="bg-transparent min-h-screen py-10">
      <header className="max-w-7xl mx-auto px-4 mb-6">
        <h1 className="text-3xl font-bold text-white">Cool Articles</h1>
      </header>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {articles.map((a) => (
          <a
            key={a.id}
            href={a.href}
            className={`group bg-gray-800 shadow-md hover:shadow-lg transition relative top-0 hover:-top-0.5 flex flex-col ${
              a.span ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${a.img})`, paddingBottom: "60%" }}
            />

            <article className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-white mb-2">
                {a.title}
              </h2>

              {a.desc && (
                <p className="text-sm text-gray-300 flex-1 leading-relaxed">
                  {a.desc}
                </p>
              )}

              <span className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-400">
                {a.author}
              </span>
            </article>
          </a>
        ))}
      </section>
    </div>
  );
};

export default ArticlesGrid;