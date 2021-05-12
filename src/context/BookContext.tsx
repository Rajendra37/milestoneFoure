import React,{useReducer,useEffect} from 'react';
import{BookReducer} from '../Reducer/BookReducer'
import {store} from '../Reducer/Store'

export const BookContext = React.createContext({});

 const BookContextProvider=(props:any)=>{
    const [state, dispatch] = useReducer<any>(BookReducer, store);
    console.log(state);
   
    useEffect(() => {
       
    }, [state])
    
    return(
        <BookContext.Provider value={{state,dispatch}}>
        {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;