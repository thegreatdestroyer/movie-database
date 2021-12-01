import { ApiService } from "../ApiService";
import { TFindResponse } from "./models";

class TitleService extends ApiService {
    constructor() {
        super('title') 
    }

    find = (searchString: string): Promise<TFindResponse> => {
        return this.get('find', { params: { q: searchString } });
    }
}

export const titleService = new TitleService();