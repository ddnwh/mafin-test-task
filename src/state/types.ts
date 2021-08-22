export type InfoType = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export type StateType = {
    info: InfoType;
    results: CharacterType[];
}

export type SetDataActionType = {
    type: string;
    data: StateType; 
}

export type FetchDataActionType = {
    type: string;
    page: number;
    searchBy?: string; 
}