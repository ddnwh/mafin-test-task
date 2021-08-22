import {StateType,SetDataActionType} from './types';
import {SET_DATA} from './actions';

const initialState: StateType = {
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: '',
    },
    results:[],
};

export const reducer = (state:StateType = initialState, action:SetDataActionType):StateType => {
    switch(action.type) {
        case SET_DATA:
            return action.data || state
        default:
             return state
    }
}