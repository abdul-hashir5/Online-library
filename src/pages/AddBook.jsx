import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({
    title: "", author: "", category: "", description: "", rating: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (Object.values(book).includes("")) {
      alert("All fields required");
      return;
    }

    dispatch(addBook({ ...book, id: Date.now() }));
    navigate("/books");
  };

  return (
    <div className="page">
        <h2>Add New Book</h2>
        <form onSubmit={submitHandler}>
            <input placeholder="Title" onChange={e => setBook({...book, title:e.target.value})} />
            <input placeholder="Author" onChange={e => setBook({...book, author:e.target.value})} />
            <input placeholder="Category" onChange={e => setBook({...book, category:e.target.value})} />
            <input placeholder="Rating" onChange={e => setBook({...book, rating:e.target.value})} />
            <textarea placeholder="Description" onChange={e => setBook({...book, description:e.target.value})} />
            <button>Add Book</button>
        </form>
    </div>
  );
}

export default AddBook;