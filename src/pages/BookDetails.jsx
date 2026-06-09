import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.find(b => b.id == id)
  );

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to="/books">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;