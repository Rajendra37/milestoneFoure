import React, { useState, useContext, useEffect } from 'react'
import { useParams ,useHistory} from 'react-router-dom'
import { BookContext } from '../context/BookContext'


export default function Details() {

    const history=useHistory()
    const CardStyle = {

        // "height": "500px",
        "width": "1000px",
        "margin-top": "10%",
        "padding": "10px",
        "margin": "50px",
        "display": "inline-block",


    }
    const ImgStyle = {
        "height": "200px",
        "width": "150px"
    }



    const { title } = useParams<any>();
    console.log("book tite:-", title);

    const { state , dispatch} = useContext<any>(BookContext);
    const [BookDeatils, setBookDetails] = useState({
        title: "",
        author: "",
        price: "",
        rating: "",
        cover: "",
        description: ""
    })

    const gotoHomePage=(e:any)=>{
        e.preventDefault();
        history.push('/');       
    }

    useEffect(() => {
        const checkTitle = () => {
            for (let book = 0; book < state.books.length; book++) {
                if (state.books[book].title == title) {
                    setBookDetails(state.books[book])
                }
            }
        }
        checkTitle();
        console.log("book data",BookDeatils)

    }, [])
    
    const deleteBook=(title:any)=>{
        dispatch({type:'REMOVE_BOOK',title:title})
        history.push('/');
    }


    return (
    

                <div className="card-details">
                <h2>{BookDeatils.title}</h2>
                <h5>{BookDeatils.author}</h5>
                <img src={BookDeatils.cover}alt="book image" width="30%" height="50%" />
                <p>{BookDeatils.description}</p>
                <h4>Book Price:- {BookDeatils.price} </h4>
                <div className="star">
                {/* <StarRatings rating={num} starDimension="20px" starSpacing="5px" starRatedColor="#380b5c" starEmptyColor="#8a8a8a" /> */}
                </div>
               
               
               {state.isLogedIn ? <button onClick={()=>deleteBook(BookDeatils.title)}>delete</button>:null}
                    <button onClick={gotoHomePage}>Go Back</button>
               
            </div>
        
    )
}


