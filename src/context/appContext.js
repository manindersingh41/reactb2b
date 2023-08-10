import React,  {  useReducer, useContext}  from 'react';
import reducer from './reducers';
import { SEARCH_TERM, FILTERED_USERS,GET_USER, GET_USERS, CURRENT_PAGE } from './actions';
import axios from 'axios';

const initialState = {
    searchTerm : '',
    filteredUsers: [],
    user: null,
    users: JSON.parse(localStorage.getItem('userData')),
    currentPage: 1,
    itemsPerPage: 10

}


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const setSearchTerm = (payload) => {
        dispatch({type: SEARCH_TERM, payload})
    }

    const setFilteredUsers = (payload) => {
        dispatch({type: FILTERED_USERS, payload})
    }

    const setCurrentPage = (payload) => {
        dispatch({type: CURRENT_PAGE, payload})
    }

    const getAllUsers = async() => {
      
        try{
            const response = await axios.get('http://localhost:8000/users')
            const users = response?.data
            localStorage.setItem('userData', JSON.stringify(users));
            dispatch({type: GET_USERS, payload: users});

        } catch(err) {
            console.log(err)
        }
    }

    const getUser = async(id) => {
      
        try{
            const response = await axios.get(`http://localhost:8000/users/${id}`)
            const user = response?.data
            console.log(user)
            dispatch({type: GET_USER, payload: user});

        } catch(err) {
            console.log(err)
        }
    }


    return <AppContext.Provider value={{...state, setSearchTerm , setFilteredUsers, getUser, getAllUsers, setCurrentPage}}>{children}</AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}