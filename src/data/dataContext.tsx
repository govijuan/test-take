import React, {useReducer, Reducer, Dispatch, createContext, PropsWithChildren} from 'react'
import Data from './data.json'
import { Bot } from '../types/BotListTypes'

let rawData: Bot[] = [...Data]
rawData.forEach( item => item.favorite = false )


function createDataCtx<StateType, ActionType>(
    reducer: Reducer<StateType, ActionType>,
    initialState: StateType
) {
    const defaultDispatch: Dispatch<ActionType> = () => initialState
    const ctx = createContext({
        state: initialState,
        dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
    })
    function Provider(props: PropsWithChildren<{}>) {
        const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(reducer, initialState)
        return <ctx.Provider value={{ state, dispatch }} {...props} />
    }
    return [ctx, Provider] as const
}

export const initialState = [...rawData]
type AppState = typeof initialState
type Action = 
    | { type: 'favorite', shortName: string }
    | { type: 'unFavorite', shortName: string }

function reducer(state: AppState, action: Action): AppState {
    switch(action.type){
        case 'favorite':
            return state.map( (item: Bot) => item.shortName === action.shortName // will have to map the elements with the index when using it so we van pass the index
                ? {...item, favorite: true}
                : item
            )
        case 'unFavorite':
            return state.map( (item: Bot) => item.shortName === action.shortName // will have to map the elements with the index when using it so we van pass the index
                ? {...item, favorite: false}
                : item
            )
        default:
            return state
    }
}

const [ctx, DProvider] = createDataCtx(reducer, initialState)
export const DataContext = ctx
export const DataProvider = DProvider


