import React from 'react';
import history from '../history'

const SearchBar = () => {
    let input
    return (
        <form className="form-inline" onSubmit={(e) => {e.preventDefault(); history.push(`/Search/${input.value}`); input.value = '' }}>
            <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search" 
                  ref={(node) => input = node} 
            />
            <input type="submit" className="btn btn-outline-success" value="Search" />
        </form>
    );
};

export default SearchBar;