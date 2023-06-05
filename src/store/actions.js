export const ACTIONS = {
    ADD_TOKEN: 'ADD_TOKEN',
    REMOVE_TOKEN: 'REMOVE_TOKEN',
    GET_USER_INFO: 'GET_USER_INFO',
    ADD_START_DATE: 'ADD_START_DATE',
    ADD_END_DATE: 'ADD_END_DATE',
    ADD_INN: 'ADD_INN',
    TOGGLE_MAX_FULLNESS: 'TOGGLE_MAX_FULLNESS',
    TOGGLE_IS_BUSINESS_NEWS: 'TOGGLE_IS_BUSINESS_NEWS'
}

export const addToken = (token) => {
    return {
        type: ACTIONS.ADD_TOKEN,
        token
    }
}

export const removeToken = () => {
    return {
        type: ACTIONS.REMOVE_TOKEN
    }
}

export const getUserInfo = (data) => {
    return {
        type: ACTIONS.GET_USER_INFO,
        data
    }
}

export const addStartDate = (date) => {
    return {
        type: ACTIONS.ADD_START_DATE,
        date
    }
}

export const addEndDate = (date) => {
    return {
        type: ACTIONS.ADD_END_DATE,
        date
    }
}

export const addINN = (inn) => {
    return {
        type: ACTIONS.ADD_INN,
        inn
    }
}

export const toggleMaxFullness = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_MAX_FULLNESS,
        boolean
    }
}

export const toggleIsBusinessNews = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_IS_BUSINESS_NEWS,
        boolean
    }
}