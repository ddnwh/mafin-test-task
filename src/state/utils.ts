import axios from 'axios';
import {StateType} from './types';

export const fetchData = (page: number, searchBy?: string) => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const url = searchBy? `${baseUrl}/?page=${page}&name=${searchBy}`: `${baseUrl}/?page=${page}`;
    return axios.request({
        method: 'GET',
        url,
    })
}

export const initialState: StateType = {
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: '',
    },
    results:[],
};