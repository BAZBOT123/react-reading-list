import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import BooksList from './components/BooksList'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setBooks(response)
      })
  }, [])

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'> Books</Link>
          </li>
          <li>
            <Link to='/book/add'>Add Book</Link>
          </li>
        </ul>
      </nav>
      <BooksList books={books} />
      <Routes>
        <Route path='/' element={< BooksList books={books} />} />
        <Route path='/book/add' element={< AddBook />} />
        <Route path='/book/:id' element={< ViewBook />} />
      </Routes>
    </div>
  );
}

export default App;
