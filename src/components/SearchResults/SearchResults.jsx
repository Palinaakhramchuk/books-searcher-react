import React from 'react';
import s from './SearchResults.module.css';

import SearchBarArea from './SearchBarArea/SearchBarArea';
const SearchResults = (props) => {

    return (
        <div className={s.SearchResultsList_grid}> Search_results must contains book_cards or book_cards &

            <SearchBarArea API_KEY = {process.env.REACT_APP_API_KEY_GB}/>
            {/*<SearchBarArea/>*/}
        </div>
    );
};

export default SearchResults;