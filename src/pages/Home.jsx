/* 
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>📚 Online Library</h1>
        <p>Browse, search, and manage books easily with a modern library system.</p>

        <h3>Categories</h3>
        <div className="category-links">
          <Link to="/books/Fiction">Fiction</Link>
          <Link to="/books/Non-Fiction">Non-Fiction</Link>
        </div>
      </div>

      <h3>Popular Books</h3>
      <p>React Basics, JavaScript Guide</p>
    </div>
  );
}

export default Home; */


import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-text">
          <h1>📚 Online Library </h1>
          <p>
            Discover, browse, and manage books effortlessly.
            Built using React, Redux, and modern UI practices.
          </p>

          <div className="hero-buttons">
            <Link to="/books" className="btn primary">
              Browse Books
            </Link>
            <Link to="/add" className="btn secondary">
              Add New Book
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="home-section">
        <h2>Browse by Category</h2>
        <div className="category-cards">
          <Link to="/books/Fiction" className="category-card">
            📖 Fiction
          </Link>
          <Link to="/books/Non-Fiction" className="category-card">
            📘 Non-Fiction
          </Link>
          <Link to="/books/Sci-Fi" className="category-card">
            🚀 Sci-Fi
          </Link>
        </div>
      </section>
      
    </div>
  );
}

export default Home;