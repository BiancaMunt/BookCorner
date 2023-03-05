import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/books', function(req, res) {
  const searchTerm = req.query.q;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const books = data.items.map(item => {
        const book = {
          thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          language: item.volumeInfo.language,
          buyLink: item.saleInfo.buyLink || null
        };
        return book;
      });
      res.send(books);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error getting books');
    });
});

app.listen(3001, function() {
  console.log('Server started on port 3001');
});
