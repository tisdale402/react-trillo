import React from "react";
import '../../styles/sass/style.scss';
// @ts-ignore
import MagnifyingGlass from '../../../img/SVG/magnifying-glass.svg';
import SearchIcon from "../imageComponents/searchIcon/searchIcon";

const SearchButton = () => (
    <button className="search__button">
        <SearchIcon color={'#999'}/>
    </button>
);

export default SearchButton;