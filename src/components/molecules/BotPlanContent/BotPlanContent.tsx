import React from 'react'
import BotPlanContentStyles, { PlanImage, PlanLabel, PlanText} from './BotPlanContent.styles'
import Button from '../../atoms/Button/Button'
import PlanImg from '../../../resources/images/plano.png'

const BotPlanContent = (props: BotPContentType) => {
    return(
        <BotPlanContentStyles>
            <PlanImage src={PlanImg} />
            <div>
                <PlanLabel>Status account</PlanLabel>
                <PlanText>{props.plan}</PlanText>
            </div>
            <Button>Update account</Button>
        </BotPlanContentStyles>
    ) 
};

interface BotPContentType{
    plan: string | undefined,
}

export default BotPlanContent
