import React from 'react';
import StyledInput from './SearchInput.styles';

const SearchInput = (props: any) =>{
    const { onChange } = props
    return(
        <StyledInput {...props} type='search' placeholder='Search' onChange={ e => onChange(e) } />
    )
}

export default SearchInput