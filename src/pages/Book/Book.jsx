import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


// const Book = ({bookPromise}) => {

//     const data = use(bookPromise);
//     console.log(data);

const Book = ({ singleBook }) => {
    const { bookId, bookName, author, image,
        review, totalPages, rating, category,
        tags, publisher, yearOfPublishing } = singleBook;


    return (


        <Link to={`/bookDetails/${bookId}`}>



            <div className="card bg-base-100 w-96 shadow-lg border p-6">
                <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div>


                        <div className='flex justify-center gap-10'>
                            {
                                tags.map((tag, index) => <button key={index}>{tag}</button>)
                            }

                        </div>



                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Publisher: {publisher}</p>
                    <div className='border-1 border-dashed border-[#13131326]'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>


        </Link>






    );
};

export default Book;