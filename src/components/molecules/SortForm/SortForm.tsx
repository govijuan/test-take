import React, {useContext, MouseEvent, ChangeEvent} from 'react'
import StyledForm from './SortForm.styles'
import { DataContext } from '../../../data/dataContext'
import SearchInput from '../../atoms/SearchInput/SearchInput'
import Button from '../../atoms/Button/Button'
import ListButton from '../../atoms/ListButton/ListButton'
import BlocksButton from '../../atoms/BlocksButton/BlocksButton'

const SortForm = (props: SortFormProps) => {
    const {dispatch} = useContext(DataContext)

    const orderByNameClick = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch({type: 'orderByName'})
    }

    const orderByCreatedClick = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch({type: 'orderByCreated'})
    }

    const onSearch = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        console.log('OnChange acionado!!')
        dispatch({type: 'searchFor', searchTermStr: value })
    }

    return(
        <StyledForm onSubmit={ e => e.preventDefault() } >
            <SearchInput onSearch={onSearch}/>
            <Button onClick={orderByNameClick}>Order by name</Button>
            <Button onClick={orderByCreatedClick}>Order by creation</Button>
            <BlocksButton />
            <ListButton />
        </StyledForm>
    )
}

type SortFormProps = {
    
}

export default SortForm