import React from 'react';
import Header from "../components/Header/Header";
import SearchResults from "../components/SearchResults/SearchResults";
import BookCard from "../components/BookCard/BookCard";
import MoreAboutBook from "../components/MoreAboutBook/MoreAboutBook";

const HomePage = () => {
    return (
        <div>
            <Header/>
            {/*<SearchBarArea/>*/}
            <SearchResults/>
            <BookCard/>
            <MoreAboutBook/>
            {/*    book_cards and more about books must be in search_results jsx*/}


        </div>
    );
};

export default HomePage;