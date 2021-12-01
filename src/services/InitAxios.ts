import axios from 'axios';

export const initAxios = () => {
    //@ts-ignore
    axios.defaults.headers['x-rapidapi-host'] = 'imdb8.p.rapidapi.com';
    //@ts-ignore
    axios.defaults.headers['x-rapidapi-key'] = '843d30a51dmsh73b9dd067eae6fcp1d5deajsn420ca5f7d155';
}