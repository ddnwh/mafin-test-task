import {StateType,SetDataActionType} from './types';
import {SET_DATA} from './actions';
import {initialState} from './utils';

export const reducer = (state:StateType = initialState, action:SetDataActionType):StateType => {
    switch(action.type) {
        case SET_DATA:
            return action.data || state
        default:
             return state
    }
}