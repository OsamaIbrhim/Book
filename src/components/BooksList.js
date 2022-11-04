import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import { useNavigate } from 'react-router-dom';

import BooksContext from '../context/BooksContext';

const BooksList = () => {
  let navigate = useNavigate();
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const handleEditBook = (id) => {
    return navigate(`/edit/${id}`)
  };
  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} handleEditBook={handleEditBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;