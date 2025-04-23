import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);
    console.log(data)
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllBooks(data)
    //     })
    // },[])
    // const bookPromise = fetch('./booksData.json').then(res=>res.json())
    return (
        <div>
            <h1 className='text-3xl text-center P-6'>BOOKS</h1>
            <Suspense fallback={<span>Loading.....</span>}>

                {
                    // <Book bookPromise={bookPromise}></Book>
                }

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>

            </Suspense>
        </div>
    );
};

export default Books;