import React from "react";

const SearchBy = (props) => {

    const onFilterChange = (event) => {
        props.onDataAdd(event.target.value)
    }
    
    return (
        <div >
            <select value = {props.defaultFilterTwo}  onChange = {onFilterChange}>
                <option>Filter By</option>
                <option>FullName</option>
                <option>MobileNo</option>
                <option>Age</option>
            </select>
        </div>
    );
}

export default SearchBy;