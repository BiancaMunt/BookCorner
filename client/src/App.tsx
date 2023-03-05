import React, { useState } from 'react';
import BookTable from "./components/BookTable";
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const url = 'http://localhost:3001/books';

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`${url}?q=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSearchResults(data.map((item: any) => ({
          id: item.id,
          title: item.title,
          authors: item.authors || [],
          language: item.language || '',
          thumbnail: item.thumbnail || '',
          buyLink: item.buyLink || '',
        })));
        setIsLoading(false);
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError('An error occurred while fetching search results.');
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="h1 text-info">Google Books Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="searchTerm"
          placeholder="Book title"
          className="form-control"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <div id="submitButton">
          <button type="submit" className="btn btn-outline-primary" disabled={isLoading}>Search</button>
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {searchResults.length > 0 &&
        <div className="book-container">
          <BookTable books={searchResults} />
        </div>
      }
    </div>
  );
}

export default App;
