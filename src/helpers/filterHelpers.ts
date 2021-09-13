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

export const filterBySearchTerm = (searchTerm: string, origArr: Bot[]) => {
    let result = []
    const lSearchTerm = searchTerm.toLowerCase()
    if(searchTerm){
        result = origArr.filter( item => {
            const lName = item.name.toLowerCase()
            return lName.search(lSearchTerm) !== -1
        })
    } else {
        result = origArr
    }
    return result
}