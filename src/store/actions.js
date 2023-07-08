export const ACTIONS = {
    ADD_TOKEN: 'ADD_TOKEN',
    ADD_EXPIRE_DATE: 'ADD_EXPIRE_DATE',
    REMOVE_EXPIRE_DATE: 'REMOVE_EXPIRE_DATE',
    REMOVE_TOKEN: 'REMOVE_TOKEN',
    GET_USER_INFO: 'GET_USER_INFO',
    ADD_START_DATE: 'ADD_START_DATE',
    ADD_END_DATE: 'ADD_END_DATE',
    REMOVE_START_DATE: 'REMOVE_START_DATE',
    REMOVE_END_DATE: 'REMOVE_END_DATE',
    ADD_INN: 'ADD_INN',
    TOGGLE_MAX_FULLNESS: 'TOGGLE_MAX_FULLNESS',
    TOGGLE_IS_BUSINESS_NEWS: 'TOGGLE_IS_BUSINESS_NEWS',
    TOGGLE_ONLY_MAIN_ROLE: 'TOGGLE_ONLY_MAIN_ROLE',
    ADD_TONALITY: 'ADD_TONALITY',
    TOGGLE_ONLY_WITH_RISK_FACTORS: 'TOGGLE_ONLY_WITH_RISK_FACTORS',
    ADD_LIMIT: 'ADD_LIMIT',
    ADD_SEARCH_FORM_RESPONSE: 'ADD_SEARCH_FORM_RESPONSE',
    ADD_SEARCH_FORM_IDS: 'ADD_SEARCH_FORM_IDS',
    ADD_POSTS: 'ADD_POSTS',
    REMOVE_POSTS: 'REMOVE_POSTS',
    TOGGLE_BURGER: 'TOGGLE_BURGER',
}

export const addToken = (token) => {
    return {
        type: ACTIONS.ADD_TOKEN,
        token
    }
}

export const addExpireDate = (date) => {
    return {
        type: ACTIONS.ADD_EXPIRE_DATE,
        date
    }
}

export const removeExpireDate = () => {
    return {
        type: ACTIONS.REMOVE_EXPIRE_DATE
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

export const removeStartDate = () => {
    return {
        type: ACTIONS.REMOVE_START_DATE
    }
}

export const removeEndDate = () => {
    return {
        type: ACTIONS.REMOVE_END_DATE
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

export const toggleOnlyMainRole = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_ONLY_MAIN_ROLE,
        boolean
    }
}

export const addTonality = (tonality) => {
    return {
        type: ACTIONS.ADD_TONALITY,
        tonality
    }
}

export const toggleOnlyWithRiskFactors = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_ONLY_WITH_RISK_FACTORS,
        boolean
    }
}

export const addLimit = (num) => {
    return {
        type: ACTIONS.ADD_LIMIT,
        num
    }
}

export const addSearchFormResponse = (data) => {
    return {
        type: ACTIONS.ADD_SEARCH_FORM_RESPONSE,
        data
    }
}

export const addSearchFormIds = (data) => {
    return {
        type: ACTIONS.ADD_SEARCH_FORM_IDS,
        data
    }
}




/* export const addPosts = (data) => {
    return {
        type: ACTIONS.ADD_POSTS,
        data
    }
}

export const removePosts = () => {
    return {
        type: ACTIONS.REMOVE_POSTS,
    }
} */