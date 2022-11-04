//React
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

//Page
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = () => {
  let navigate = useNavigate()
  const { books, setBooks } = useContext(BooksContext)
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate("/");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;