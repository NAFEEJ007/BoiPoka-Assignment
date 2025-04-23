import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const {id} = useParams();
    const idBook = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId == idBook);

    const handleMarkAsRead = id =>{
        // store with id
        // store in local storage
        // we will store in collection
        //  if book already exist show an alert
        // if not then push in the array or the collection
        toast("Book Added!");
        addToStoredDB(id)
    }

// destructuring: 
const { bookId, bookName, author, image,
    review, totalPages, rating, category,
    tags, publisher, yearOfPublishing } = singleBook;

    return (
        <div>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <ToastContainer />

            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">WishList</button>

        </div>
    );
};

export default BookDetails;