import React, {useContext,useEffect, MouseEvent} from 'react'
import StyledForm from './SortForm.styles'
import { DataContext } from '../../../data/dataContext'
import SearchInput from '../../atoms/SearchInput/SearchInput'
import Button from '../../atoms/Button/Button'
import ListButton from '../../atoms/ListButton/ListButton'
import BlocksButton from '../../atoms/BlocksButton/BlocksButton'

const SortForm = (props: SortFormProps) => {
    const {dispatch} = useContext(DataContext)

    useEffect(() => {
        dispatch({type: 'orderByCreated'})
    },[])

    const orderByNameClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('clickou no order by name!!')
        dispatch({type: 'orderByName'})
    }

    const orderByCreatedClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('clickou no order by created!!')
        dispatch({type: 'orderByCreated'})
    }

    return(
        <StyledForm onSubmit={ e => e.preventDefault() } >
            <SearchInput />
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