import React,{useReducer,useEffect} from 'react';
import { BookReducer } from '../Reducer/BookReducer';

export const BookContext = React.createContext({});

 const BookContextProvider=(props:any)=>{
    const [books, dispatch] = useReducer(BookReducer,[]);
    console.log(books);
    
    return(
        <BookContext.Provider value={{books,dispatch}}>
        {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;