import React from 'react'
import {Container} from 'semantic-ui-react'
import BookCard from '../Components/BookCard'

class CardContainer extends React.Component{


    render(){
        // console.log(this.props.book)
        return (
            <Container text>
                 {this.props.book.users ? <BookCard updateLikes={this.props.updateLikes} book={this.props.book}/> : null}
        </Container>
            )
    }
}
export default CardContainer