//React
import { BrowserRouter, Routes, Route , useNavigate } from 'react-router-dom';

//Page
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBooks';
import NotFound from '../components/NotFound';
import BooksContext from '../context/BooksContext';

//App Router
const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{books , setBooks}}>
            <Routes>
              <Route path='/' element={<BooksList />}/>
              <Route path='/add' element={<AddBook />}/>
              <Route path='/edit/:id' element={<EditBook />}/>    
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

