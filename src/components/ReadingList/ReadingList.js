import React from 'react';
import './ReadingList.css';

const ReadingList = ({data}) => {
    return (
        <div>     
        <div className="mainContent">
            <h1>Progress on current books</h1>
            <div>
                
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Progress</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {data.map((book,index) => (
                    <tr className="bookRow" key={book.id}>
                        <td className="">{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.page}</td>
                        <td><a key={book.id} className="btn btn-basic btn-sm" href="">Edit</a></td>
                        <td><a key={book.id} className="btn btn-basic btn-sm" href="">Delete</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
            
            </div>
        </div>
        </div>                       
    );
};

export default ReadingList;