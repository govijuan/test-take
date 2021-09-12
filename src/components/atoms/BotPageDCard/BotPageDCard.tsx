import React from 'react'
import AUsersCardStyles, { AUTxtWrap } from './BotPageDCard.styles'
import BotPageIcon from '../BotPageIcon/BotPageIcon';
import AUsersImage from '../../../resources/images/user.png'
import RMessageImage from '../../../resources/images/union.png'
import SentMessagesImage from '../../../resources/images/sent.png'

const getIconInfo = (kind: string) => {
    switch(kind) {
        case 'activeUsers':
            return {iconClass: 'a-users-icon', iconImage: AUsersImage}
        case 'recievedMessages':
            return {iconClass: 'r-messages-icon', iconImage: RMessageImage}
        case 'sentMessages':
            return {iconClass: 's-messages-icon', iconImage: SentMessagesImage}
        default:
            return {iconClass: 'a-users-icon', iconImage: AUsersImage}
    }
}

const BotPageDCard = (props: AUsersCardProps) => {
    const {dataNumber, className, kind, dataLabel} = props
    const { iconClass, iconImage } = getIconInfo(kind)
    return(
        <AUsersCardStyles className={className}>
            <BotPageIcon className={iconClass} imageSrc={iconImage} />
            <AUTxtWrap>
                <span className='big-txt'>{dataNumber}</span>
                <span className='small-txt'>{dataLabel}</span>
            </AUTxtWrap>
        </AUsersCardStyles>
    ) 
};

interface AUsersCardProps {
    kind: string,
    dataNumber: number | undefined,
    dataLabel: string,
    className?: string,
}

export default BotPageDCard
