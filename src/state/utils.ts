import axios from 'axios'

export const fetchData = (page: number, searchBy?: string) => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const url = searchBy? `${baseUrl}/?page=${page}&name=${searchBy}`: `${baseUrl}/?page=${page}`;
    return axios.request({
        method: 'GET',
        url,
    })
}