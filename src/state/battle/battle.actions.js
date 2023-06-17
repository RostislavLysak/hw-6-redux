import BATTLE from "./battle.constants"

export const setUserLoadingAction = () => ({
    type: BATTLE.SET_USERS_LOADING
})

export const getUserWinnerAction = (payload) => ({
    type: BATTLE.GET_USER_WINNER,
    payload
})

export const getUserLoserAction = (payload) => ({
    type: BATTLE.GET_USER_LOSER,
    payload
})

export const getUsersFailureAction = (payload) => ({
    type: BATTLE.GET_USERS_FAILURE,
    payload
})

export const getPlayerAction = (payload) => ({
    type: BATTLE.GET_PLAYER,
    payload
})