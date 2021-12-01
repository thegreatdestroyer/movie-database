export type TFilmImage = {
    height: number;
    id: string;
    url: string;
    width: number;
}

export type TPrincipals = {
        id: string;
        legacyNameText: string;
        name: string;
        category: string;
        characters: string[];
        endYear: number;
        episodeCount: number;
        roles: TRoles[];
        startYear: number;
}


export type TRoles = {
    character: string;
    charactedId: string;
}

export type TMeta = {
    operation: string;
    requestId: string;
    serviceTimeMs: number;
}

