import {SetDataActionType,FetchDataActionType, StateType} from './types';

export const FETCH_DATA = 'FETCH_DATA';
export const SET_DATA = 'SET_DATA';

export const fetchData = (page: number, searchBy?:string):FetchDataActionType => ({
    type: FETCH_DATA,
    page,
    searchBy,
});

export const setData = (data:StateType):SetDataActionType => ({
    type: SET_DATA,
    data
});