import React from 'react';
import StyledInput from './SearchInput.styles';

const SearchInput = (props: SearchProps) => (
    <StyledInput {...props} type='search' placeholder='Search' />
)

type SearchProps = {

}

export default SearchInput