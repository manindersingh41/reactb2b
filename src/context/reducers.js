import { SEARCH_TERM, FILTERED_USERS,GET_USER, GET_USERS, CURRENT_PAGE} from "./actions";
const reducer  = (state, action)  => {
    if(action.type === SEARCH_TERM) {
        return {
            ...state,
            searchTerm: action.payload
        }
    }

    if(action.type === FILTERED_USERS) {
        return {
            ...state,
            filteredUsers: action.payload
        }
    }

    if(action.type === GET_USERS) {
        return {
            ...state,
            users: action.payload
        }
    }

    if(action.type === GET_USER) {
        return {
            ...state,
            user: action.payload
        }
    }
    if(action.type === CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.payload
        }
    }
    throw new Error( `no such action: ${action.type}`)
}

export default reducer;