import POPULAR from "./popular.constants"

export const setSelectedLanguageAction = (payload) => ({
    type: POPULAR.SET_SELECTED_LANGUAGE,
    payload
})

export const setReposLoadingAction = () => ({
    type: POPULAR.SET_REPOS_LOADING
})

export const getReposSuccessAction = (payload) => ({
    type: POPULAR.GET_REPOS_SUCCESS,
    payload
})

export const getReposFailureAction = (payload) => ({
    type: POPULAR.GET_REPOS_FAILURE,
    payload
})