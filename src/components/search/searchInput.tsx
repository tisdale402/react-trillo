import React from "react";
import '../../styles/sass/style.scss';
import SearchButton from "./searchButton";

const SearchInput = () => (
    <React.Fragment>
        <input className="search__input" placeholder="Search hotels"/>
        <SearchButton/>
    </React.Fragment>
);

export default SearchInput;