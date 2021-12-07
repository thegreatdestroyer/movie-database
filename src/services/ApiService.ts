import axios, { AxiosRequestConfig } from 'axios';

export class ApiService {
  readonly baseUrl: string;

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  post = async (method: string, param?: any, config?: AxiosRequestConfig) => {
    const url = `api/${this.baseUrl}/${method}`;
    const { data } = await axios.post(url, param, config);
    return data;
  };

  get = async (method: string, config?: AxiosRequestConfig) => {
      const url = `api/${this.baseUrl}/${method}`;
      const { data } = await axios.get(url, config);
      return data;
  }
}
