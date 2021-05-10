import React ,{useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { BookContext } from '../context/BookContext'


export default function Details() {
    const {title}=useParams<any>();
    console.log(title);
    
    const { books } = useContext<any>(BookContext);
    const [BookDeatils, setBookDetails] = useState({
        title:"",
        author:"",
        price:"",
        rating:"",
        cover:"",
        description:""
    })
   
//   for (let book = 0; book < books.length; book++) 
//   {
//       if(books[book].title==title)
//       {
//         setBookDetails(books[book])
//       }
      
//   }

//   console.log(BookDeatils)
    
  
    
    return (
        <div>
           
        </div>
    )
}
