import React from 'react'
import StyledLButton, {Icon} from './ListButton.styles'
import OrganizeList from '../../../resources/images/organize-list.png'

const ListButton = (props: ListButtonProps) => (
    <StyledLButton>
        <Icon src={OrganizeList} />
    </StyledLButton>
)

type ListButtonProps = {}

export default ListButton