import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Styles/Search.css'

function Search() {
    return (
        <>
            <form id="search-form">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Search" />
            </form>
        </>
    );
}

export default Search