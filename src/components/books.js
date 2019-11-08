/**
 * @Date:   2019-11-05T16:21:47+00:00
 * @Last modified time: 2019-11-08T14:44:40+00:00
 */
 import React from 'react';
 import Navbar from './navbar';
import Moment from 'react-moment';

 const Books = ({ books }) => {
       return (
         <div>
         <Navbar />
         <div className = "container">
           {books.map((book, i) => (
             <div key = {i} className="card">
               <div className="card-body">
                 <h5 className="card-title">{book.name}</h5>
                 <p className="card-text"><strong>ISBN:</strong> {book.isbn}</p>
                 <p className="card-text"><strong>Author:</strong> {book.authors}</p>
                 <p className="card-text"><strong>Pages:</strong> {book.numberOfPages}</p>
                 <p className="card-text"><strong>Publisher:</strong> {book.publisher}</p>
                 <p className="card-text"><strong>Country:</strong> {book.country}</p>
                 <p className="card-text"><strong>Media Type:</strong> {book.mediaType}</p>
                 <p className="card-text"><strong>Released:</strong> <Moment format = "DD/MM/YYYY">{book.released}</Moment></p>
                 <p className="card-text"><strong>POV Characters:</strong> {book.povCharacters}</p>
               </div>
             </div>
           ))}
         </div>
         </div>
       )
     };

export default Books;
