import { makeBattle } from "../../plugins/api"
import { getUserLoserAction, getUsersFailureAction, getUserWinnerAction, setUserLoadingAction } from "./battle.actions"


export const getUsers = (users) => (dispatch) => {
    makeBattle(users)
        .then(([winner, loser]) => {
            dispatch(getUserWinnerAction(winner))
            dispatch(getUserLoserAction(loser))
        })
        .catch(error => dispatch(getUsersFailureAction(error)))
        .finally(() => dispatch(setUserLoadingAction()))
}