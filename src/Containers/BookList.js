import React from 'react'
import {Menu} from 'semantic-ui-react'
import BookListCard from '../Components/BookListCard'

class BookList extends React.Component{

  renderBooks = () => {
    return this.props.books.map(book => <BookListCard handleListClick={this.props.handleListClick} key={book.id} book={book}/>)
  }


  render(){
      return (
          <Menu vertical inverted>
          <Menu.Item as={"a"}>
            Book title
            {this.renderBooks()}
          </Menu.Item>
          </Menu>
          )
  }
}

export default BookList