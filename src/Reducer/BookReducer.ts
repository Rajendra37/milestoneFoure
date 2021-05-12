
import Login from '../Componets/Login';
import { Store } from './Store'

interface Action {
    type: string,
    payload?: any
}

export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';



export const BookReducer = (state: Store, action: any) => {
    console.log(" it is reducer...");

    switch (action.type) {

        case 'GET_ALL_BOOKS':
            return { ...state, books: action.payload }
            break;

        case 'ADD_NEW_BOOK':
            return {
                ...state,
                books: [...state.books, action.book]
            }
            break;


        case 'REMOVE_BOOK':
            return { ...state, books: [...state.books.filter((book: any) => book.title != action.title)] };
            break;

        case 'ADD_USER':
            return {
                ...state,
                user: [...state.users, action.userData]
            }
            break;

        case 'LOGIN_USER':
            let isLogedIn=false;
            state.users.map((user: any) => {
                if (user.email == action.user.email && user.password == action.user.pass) {
                    isLogedIn = true;
                 
                }
            })
            if(isLogedIn)
            {
                alert('login succssfully')
                return { ...state, isLogedIn: action.isLogedIn}
               
                
            }
            else
            {
                alert("invalid cridentials");
                return state
            }
 

        default:
            return state
    }

}