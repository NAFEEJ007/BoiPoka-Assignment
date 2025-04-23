import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    // worst case
    const [readlist, setReadlist] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadlist(myReadList);
    }, []);

    const handleSort = (type)=>{
        setSort(type)
        if (type === "pages") {
            const sortedByPage = [...readlist].sort((a,b)=>a.totalPages - b.totalPages);
            setReadlist(sortedByPage)
        }

        if (type === "ratings") {
            const sortedByRating = [...readlist].sort((a,b)=>a.rating - b.rating);
            setReadlist(sortedByRating)
        }
    }


    return (
        <div>

<details className="dropdown">
  <summary className="btn m-1">Sort by : {sort ? sort: ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('ratings')}>Ratings</a></li>
  </ul>
</details>


            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read length {readlist.length}</h2>

{
    readlist.map(b=><Book key={b.bookId} singleBook={b}></Book>)
}


                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ReadList;