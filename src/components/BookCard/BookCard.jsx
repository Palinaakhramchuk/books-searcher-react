import React from "react";
import styles from "./BookCard.module.css"

const BookCard=({book})=>{
    // const coverImg = book.volumeInfo.imageLinks?.thumbnail || '';
    // const title = book.volumeInfo.title || '';
    // const category = book.volumeInfo.categories?.[0] || '';
    // const authors = book.volumeInfo.authors || '';

    return (
    <div className={styles.Bookcard_card}> B -> this is book) book must contains More button &M_about_book component? or no..

        {/*<div className="card">*/}
        {/*    <img src={coverImg} alt={title} className="card-img-top" />*/}
        {/*    <div className="card-body">*/}
        {/*        <h5 className="card-title">{title}</h5>*/}
        {/*        <p className="card-text">Category: {category}</p>*/}
        {/*        <p className="card-text">Authors: {authors.join(', ')}</p>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </div>
    );
}

export default BookCard;