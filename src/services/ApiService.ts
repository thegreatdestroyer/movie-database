import axios from 'axios';

export class ApiService {
  readonly baseUrl: string;

  readonly version: string;

  constructor(baseUrl = '', version = 'v1') {
    this.baseUrl = baseUrl;
    this.version = version;
  }

  post = async <P, R>(method: string, param?: P): Promise<R> => {
    const url = `api/${this.version}/${this.baseUrl}/${method}`;
    const { data } = await axios.post(url, param);
    return data.data;
  };
}
