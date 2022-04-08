import {SWITCH} from '../constants'

export const menuClick=(data)=>{
    return {
        type: SWITCH,
        data: data
    }
}