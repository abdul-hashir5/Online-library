import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  // Get books from Redux store
  const books = useSelector((state) => state.books);

  // Get category from URL (for dynamic routing)
  const { category } = useParams();

  // Search state
  const [search, setSearch] = useState("");

  // Filter books by category and search text
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page">
      <h2>Browse Books</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Books Grid */}
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id}>
              <BookCard book={book} />
              <Link className="view-link" to={`/book/${book.id}`}>
                View Details →
              </Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;