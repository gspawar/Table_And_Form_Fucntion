import React from "react";
import SearchBy from "./SearchBy";
import SearchInput from "./SearchInput";

const SearchBar = (props) => {

    const recieveDataFromFilterSearchBy = (myData) => {
        props.onDataGetTwo(myData);
    }
    const receiveDataFromSearchInput = (data) => {
        props.onDataGetThree(data);
    }
    return (
        <div>
            <SearchBy defaultFilterTwo = {props.defaultFilter} onDataAdd = {recieveDataFromFilterSearchBy}/>
            <SearchInput onDataIsAdded = {receiveDataFromSearchInput}/>
        </div>
    );
}

export default SearchBar;
