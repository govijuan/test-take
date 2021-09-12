export interface Bot {
    shortName : string,
    name: string,
    description: string,
    image: string,
    template: string,
    created: string,
    updated: string,
    plan: string,
    culture: string,
    analytics: {
        user: {
            total: number,
            actived: number,
        },
        message: {
            received: number,
            sent: number,
        },
    },
    
    favorite?: boolean
}