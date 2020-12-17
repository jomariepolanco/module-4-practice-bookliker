import React from 'react'
import { render } from 'react-dom'

function BookListCard(props){

    return(
        <li onClick={() => props.handleListClick(props.book.id)}key={props.book.id}>{props.book.title}</li>
    )
}

export default BookListCard