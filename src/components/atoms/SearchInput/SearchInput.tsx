import React from 'react';
import StyledInput from './SearchInput.styles';

const SearchInput = (props: any) =>{
    const { onSearch } = props
    return(
        <StyledInput {...props} type='search' placeholder='Search' onChange={ e => onSearch(e) } />
    )
}

export default SearchInput