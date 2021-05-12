import React,{Dispatch, useContext ,useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {BookContext} from '../context/BookContext'


export default function Addbook() {
    const history=useHistory();
    const {dispatch}  = useContext<any>(BookContext);
    
    const [bookData, setbookData] = useState({
        title:"",
        author:"",
        price:"",
        rating:"",
        cover:"",
        description:""
    })

    const submitBookData=(e:any)=>{
        e.preventDefault();
        dispatch({type: 'ADD_NEW_BOOK',book:bookData});
        console.log("Book data",bookData);
        history.push('/')
       
    }

    let name,value;
    const handleBookData=(e:any)=>{
       name=e.target.name;
       value=e.target.value;
       setbookData({...bookData,[name]:value})
        // console.log(value);
    }

    return (
        <div>
            
            <div className="AddBookForm">      
                    <form onSubmit={submitBookData}>
                        <label htmlFor="">
                            Enter Book Titel
                        </label><br/>
                        <input type="text"  name="title" value={bookData.title} onChange={handleBookData} /><br/>
                        <label htmlFor="">
                            Enter Book Author
                        </label><br/>
                        <input type="text"  name="author" value={bookData.author} onChange={handleBookData}/><br/>
                        <label htmlFor="">
                            Enter Book Price
                        </label><br/>
                        <input type="text"  name="price" value={bookData.price} onChange={handleBookData}/><br/>
                        <label htmlFor="">
                            Enter Book Rating
                        </label><br/>
                        <input type="text"  name="rating" value={bookData.rating} onChange={handleBookData}/><br/>
                        <label htmlFor="">
                            Add Book Cover
                        </label><br/>
                        <input type="text" name="cover" value={bookData.cover} onChange={handleBookData} /><br/>
                        <label htmlFor="">
                            Enter Book Description
                        </label><br/>
                        <input type="text"  name="description" value={bookData.description} onChange={handleBookData}/><br/><br/>
                        <button>Add book</button>
                        
                        </form>                      
                        
                    </div>  




        </div>
    )
}
