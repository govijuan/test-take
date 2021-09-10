import React, {useContext} from 'react'
import StyledLButton, {Icon} from './ListButton.styles'
import { DataContext } from '../../../data/dataContext'
import OrganizeList from '../../../resources/images/organize-list.png'

const ListButton = (props: ListButtonProps) => {
    const { dispatch } = useContext(DataContext)
    return(
    <StyledLButton onClick={ () => dispatch({ type: 'showList' }) }>
        <Icon src={OrganizeList} />
    </StyledLButton>
    )
}

type ListButtonProps = {}

export default ListButton