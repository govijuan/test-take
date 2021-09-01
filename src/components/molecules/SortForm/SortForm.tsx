import React from 'react'
import StyledForm from './SortForm.styles'

import SearchInput from '../../atoms/SearchInput/SearchInput'
import Button from '../../atoms/Button/Button'
import ListButton from '../../atoms/ListButton/ListButton'
import BlocksButton from '../../atoms/BlocksButton/BlocksButton'

const SortForm = (props: SortFormProps) => {
    return(
        <StyledForm onSubmit={ e => e.preventDefault() } >
            <SearchInput />
            <Button>Order by name</Button>
            <Button>Order by creation</Button>
            <BlocksButton />
            <ListButton />
        </StyledForm>
    )
}

type SortFormProps = {
    
}

export default SortForm