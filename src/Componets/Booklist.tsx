import React, { useContext, CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BookContext } from '../context/BookContext'



export default function Booklist() {

    const { state } = useContext<any>(BookContext);

    const [myBooks, setMybooks] = useState(state.books)

    const [toggleValue, settoggleValue] = useState(false)
    const [tagValue, setTagvalue] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [priceRange, setpriceRange] = useState({
        minValue: 0,
        maxValue: 0,
    })

    const handleTagvalue = (e: any) => {
        if (e.target.value == "price" || e.target.value=='rating') {
            settoggleValue(true)
        }
        setTagvalue(e.target.value)
        console.log(tagValue);

    }

    const handleSearchvalue = (e: any) => {
        setSearchValue(e.target.value)
        console.log(searchValue);

    }

    const handlePriceRange = (e: any) => {
        setpriceRange({ ...priceRange, [e.target.name]: e.target.value })
        console.log("minprice and max", priceRange);

    }

    const CardStyle = {

        "height": "500px",
        "width": "300px",
        "marginTop": "10%",
        "padding": "10px",
        "margin": "50px",
        "display": "inline-block",

    }
    const ImgStyle = {
        "height": "75%",
        "width": "100%"
    }
    const searchStyle = {
        "marginTop": "5%",
        "marginLeft": "40%",

    }
    const serachTags = {
        "margin": "5px",
        "padding": "5px"
    }

    const filterBooks = (e: any) => {
        e.preventDefault();

        let option = tagValue;
        let keyword = searchValue;
        let searchedData = [];

        if (option == 'author') {
            for (let i = 0; i < myBooks.length; i++) {
                if (myBooks[i].author.toLowerCase().includes(keyword)) {
                    searchedData.push(myBooks[i])
                }
                setMybooks(searchedData);
            }

        }
        else if (option == 'title') {
            for (let i = 0; i < myBooks.length; i++) {
                if (myBooks[i].title.toLowerCase().includes(keyword)) {
                    searchedData.push(myBooks[i])
                }
                setMybooks(searchedData);
            }

        }
        else if (option == 'price') {
            for (let i = 0; i < myBooks.length; i++) {
                if (myBooks[i].price >= priceRange.minValue && myBooks[i].price <= priceRange.maxValue) {
                    searchedData.push(myBooks[i])
                }
                setMybooks(searchedData);
            }

        }
        else if (option == 'rating') {
            for (let i = 0; i < myBooks.length; i++) {
                if (myBooks[i].rating >= priceRange.minValue && myBooks[i].rating <= priceRange.maxValue) {
                    searchedData.push(myBooks[i])
                }
                setMybooks(searchedData);
            }

        }
        else {
            alert('select search value...')


        }

        console.log('filter clicked..');


    }


    return (<>

        <div className="search-bar">
                <div className="option-div">
                <select className="select-options" onChange={handleTagvalue}>
                    <option value="choose"> choose</option>
                    <option value="author"> Author</option>
                    <option value="title"> Title</option>
                    <option value="price"> Max Price</option>
                    <option value="rating"> Rating</option>
                </select>
                    </div>

                    <div style={toggleValue ? { display: "none" } : { display: "block" }} className="search-bar-div">
                    <input className="search-box"  type="text" placeholder="search" onChange={handleSearchvalue} />
                     </div>

                        <div className="range-div" style={toggleValue ? { display: "block" } : { display: "none" }}>
                        <input className="Min-value"  type="text" placeholder="minPrice" name="minValue" value={priceRange.minValue} onChange={handlePriceRange} />
                        <input className="Max-value" type="text" placeholder="maxPrice" name="maxValue" value={priceRange.maxValue} onChange={handlePriceRange} />
                       
                        </div>
                        <div className="button-div">
                        <button onClick={filterBooks}>filter</button>
                        </div>

        </div>

        <div>

            {myBooks.map((book: any) => {
                return (

                    <div className="card" style={CardStyle}>
                        <img className="card-img-top" src={book.cover} style={ImgStyle} alt="Card image cap" />
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text"></p>
                        <Link to={"/Details/" + book.title}><button>See Book Details</button></Link>

                    </div>
                )

            })
            }
        </div>
    </>


    )
}
