
export const BookReducer=(state:any,action:any)=>{
    console.log(" it is reducer...");
    
    switch(action.type){
       
        case 'ADD_BOOK':
            return[...state,action.book]
            default:
                return state
    }

}