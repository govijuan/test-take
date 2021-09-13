import { Bot } from "../types/BotListTypes"

export const orderBotsListBy = (origBotsArr: Bot[], filterBy: string ) => {
    const sortedArr: Bot[] = 
        (filterBy === 'name') 
        ?
            origBotsArr.sort((a:Bot, b:Bot) => {
                if(a.name  > b.name){
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }

                return 0
            })
        :
        (filterBy === 'created')
        ?
            origBotsArr.sort((a:Bot, b:Bot) => {
                if(a.created  > b.created){
                    return 1
                }
                if(a.created < b.created){
                    return -1
                }

                return 0
            })
        :
            origBotsArr

    return sortedArr
}