export type filterFunctions = {
        filter: string[],
        clearFilter: Function,
        clearAllFilter: Function,
}

export type dataType = {
        id: number,
        company: string,
        logo: string,
        condition: boolean,
        featured: boolean,
        position: string,
        role: string,
        level: string,
        postedAt: string,
        contract: string,
        location: string,
        languages: string[],
        tools: string[],
        filter: string[]
        addFilter: Function,
        filterFunction: Function
}
export interface IconType {
        url: string,
        desc: string
}

export interface btnType {
        skill:string
}