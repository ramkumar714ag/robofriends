import React from 'react';

function SearchBox({searchfield,searchChange}) {

    return(
        <div className = 'ba2'>
        <input 
            className = 'pa3 ba b--green bg-lightest-blue' 
            type ='searchbox' 
            placeholder = 'Search robot'
            onChange = { searchChange }
         />
        </div>
    );  
}

export default SearchBox;