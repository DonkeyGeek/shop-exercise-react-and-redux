import { BUY_PHONE } from './type'

export const buyPhone = totalPhone => {
    return {
        type: BUY_PHONE,
        payload: totalPhone
    }
}