import React from 'react';
import s from './SearchBarArea.module.css';
const SearchBarArea = (props) => {
    return (
        <div className={s.SearchBarArea_block}> search_line and categories will be here +-sorting
            {/*maybe I need 2 'child' components of this component: searchbar, sorting, categories*/}
        </div>
    );
};

export default SearchBarArea;

