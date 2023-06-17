import BATTLE from "./battle.constants";

const initialState = {
    loading: true,
    winner: '',
    loser: '',
    error: null,
    players: [{ name: '', image: null }, { name: '', image: null }]
}

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE.SET_USERS_LOADING: {
            return {
                ...state,
                error: null,
                loading: false
            }
        }

        case BATTLE.GET_USER_WINNER: {
            return {
                ...state,
                winner: action.payload
            }
        }

        case BATTLE.GET_USER_LOSER: {
            return {
                ...state,
                loser: action.payload
            }
        }
        case BATTLE.GET_USERS_FAILURE: {
            return {
                ...state,
                error: action.payload,
            }
        }

        case BATTLE.GET_PLAYER: {
            const { index, ...payload } = action.payload

            const players = [...state.players]

            const player = players[index]

            if (!player) {
                players[index] = {}
            }

            players[index] = { ...player, ...payload }

            return {
                ...state,
                players
            }
        }
        default:
            return state
    }
}