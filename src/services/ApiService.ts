import axios, { AxiosRequestConfig } from 'axios';

export class ApiService {
  readonly baseUrl: string;

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  post = async <P, R>(method: string, param?: P): Promise<R> => {
    const url = `api/${this.baseUrl}/${method}`;
    const { data } = await axios.post(url, param);
    return data.data;
  };

  get = async (method: string, config?: AxiosRequestConfig) => {
      const url = `api/${this.baseUrl}/${method}`;
      const { data } = await axios.get(url, config);
      return data.data;
  }
}
