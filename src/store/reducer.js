import { ACTIONS } from "./actions";

export const initialState = {
    token: '',
    userInfo: {
        companyLimit: '',
        usedCompanyCount: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TOKEN:
            return {...state, token: action.token};
        case ACTIONS.GET_USER_INFO:  
            return {
                ...state, userInfo: {
                    companyLimit: action.data.companyLimit,
                    usedCompanyCount: action.data.usedCompanyCount
                }
            }  
        default: {
            return state;
        }
    }
}

export default reducer;