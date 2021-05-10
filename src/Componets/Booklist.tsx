import React, { useContext, CSSProperties } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BookContext } from '../context/BookContext'



export default function Booklist() {

    const { books } = useContext<any>(BookContext);

    const CardStyle = {

        "height": "500px",
        "width": "300px",
        "margin-top": "10%",
        "padding": "10px",
        "margin": "50px",
        "display": "inline-block",


    }
    const ImgStyle = {
        "height": "75%",
        "width": "100%"
    }
    return (<>

        <div>
            
        </div>

        <div>

            {books.map((book: any) => {
                return (

                    <div className="card" style={CardStyle}>
                        <img className="card-img-top" src={book.cover} style={ImgStyle} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-body">
                        <Link to={"/Details/"+book.title}><button>See Book Details</button></Link>
                        </div>
                    </div>
                )

            })
            }
        </div>
    </>


    )
}
