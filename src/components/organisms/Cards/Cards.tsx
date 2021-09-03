import React from "react"
import CardStyles from "./Cards.styles"
import BotCard from "../../molecules/BotCard/BotCard"

const Cards = (props: CardsProps) => {
    const { botsList } = props
    return (
        <CardStyles>
            <BotCard favorite={false} name='Bot name' shortName='Builder'/>
            <BotCard favorite={true} name='Bot name' shortName='Builder'/>
        </CardStyles>
    )
}

interface Bot {
    shortName : string,
    name: string,
    description: string,
    image: string,
    template: string,
    created: string,
    updated: string,
    plan: string,
    culture: string,
    analytics: {},
    message: {},
}

interface CardsProps{
    botsList: Bot[],
}

export default Cards