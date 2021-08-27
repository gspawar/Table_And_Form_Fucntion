import React from "react";

const SearchInput = (props) => {
    const SearchInputChanged = (event) => {
        props.onDataIsAdded(event.target.value);
    }
    return (
        <div>
            <input  type = "text" placeholder = "Search User..." onChange = {SearchInputChanged}/>
        </div>
    );
}

export default SearchInput;