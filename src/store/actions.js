export const ACTIONS = {
    ADD_TOKEN: 'ADD_TOKEN',
    GET_USER_INFO: 'GET_USER_INFO'
}

export const addToken = (token) => {
    return {
        type: ACTIONS.ADD_TOKEN,
        token
    }
}

export const getUserInfo = (data) => {
    return {
        type: ACTIONS.GET_USER_INFO,
        data
    }
}