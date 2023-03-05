import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

interface Book {
	id: string;
	title: string;
	authors: string[];
	language: string;
	thumbnail: string;
	buyLink: string;
	currentPage: Number,
}

interface Props {
	books: Book[];
}

const BookTable: React.FC<Props> = ({ books }) => {
	const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

	useEffect(() => {
    setCurrentPage(1);
  }, [books]);

	const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

	const renderTableRows = () => {
    return currentBooks.map((book, index) => (
      <tr key={index}>
        <td><img src={book.thumbnail} alt={book.title} /></td>
        <td>{book.title}</td>
        <td>{book.authors.join(', ')}</td>
        <td>{book.language.toUpperCase()}</td>
        <td>
							{book.buyLink ? (
								<a href={book.buyLink} target="_blank" rel="noopener noreferrer">
									View more details
								</a>
							) : (
								<span>No URL available</span>
							)}
						</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
      pageNumbers.push(i);
    }

		return (
      <Pagination className="justify-content-center">
        {pageNumbers.map((number) => (
          <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    );
  };

	return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Buy Link</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </Table>
      {renderPagination()}
    </>
  );
};

export default BookTable;
