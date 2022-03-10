import { useState } from "react"

function AddBook(props) {

  const { setBooks, books } = props

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('Horror')

  function onSubmit(event) {
    event.preventDefault()
    console.log(title, author, genre)
  

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: title, author: author, genre: genre })
  }

  fetch('http://localhost:4000/books', options)
    .then(response => response.json())
    .then(response => {

      console.log("Created book", response)
      setBooks([...books, response])

      setTitle('')
      setAuthor('')
      setGenre('Horror')  
    })
  }

  
  function onTitleChanged(event) {
    setTitle(event.target.value)
  }

  function onAuthorChanged(event) {
    setAuthor(event.target.value)
  }

  function onGenreChanged(event) {
    setGenre(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Book</h2>

      <label>Title
        <input onChange={onTitleChanged} value={title}
          id="title" name="title" type="text" required />
      </label>

      <label>Author
        <input onChange={onAuthorChanged} value={author}
          id="author" name="author" type="text" required />
      </label>

      <label>Genre
        <select onChange={onGenreChanged} value={genre}
          id="title" name="title" required>
          <option>Horror</option>
          <option>Science Fiction</option>
          <option>Nonfiction</option>
          <option>History</option>
          <option>Thriller</option>
        </select>
      </label>

      <div>
        <button
          type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddBook
