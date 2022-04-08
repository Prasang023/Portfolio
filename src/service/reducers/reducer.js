import {SWITCH} from '../constants'

export default function switchMenu(state=false, action) {
    switch(action.type) {
        case SWITCH:
            return !state
            break;
        default:
            return state
    }
}