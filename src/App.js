import React from "react";
import HeaderMain from './Components/HeaderMain'
import BookList from './Containers/BookList'
import CardContainer from './Containers/CardContainer'

class App extends React.Component{

  state = {
    books: [],
    clickedBook: {},
    user: {
      id: 1,
      username: "pouros"
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(r => r.json())
    .then(books => this.setState({books: books}))
  }

  handleListClick = (id) => {
    const book = this.state.books.find(book => book.id === id)
    this.setState({clickedBook: book})
  }

  updateLikes = (id) => {
    let newArray = [...this.state.books]
    let users = []
    // console.log(newArray)
    let bookIdx = newArray.findIndex(book => book.id === id)
    if (!newArray[bookIdx].users.find(user => user.username === this.state.user.username)){
      users = [...newArray[bookIdx].users, this.state.user]
    } else {
      users = [...newArray[bookIdx].users].filter(user => user.username !== this.state.user.username)
    }
      fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({users})
      })
      .then(r => r.json())
      .then((newObj) => {
        newArray[bookIdx] = newObj
        this.setState({books: newArray})
        this.setState({clickedBook: newObj})
      })
    
  }
  render(){
    // console.log(this.state.books)
    return (
      <div>
        <HeaderMain />
  
        <main>
            <BookList books={this.state.books} handleListClick={this.handleListClick} />
  
            <CardContainer updateLikes={this.updateLikes} book={this.state.clickedBook} />
          
        </main>
      </div>
    );
  }
}

export default App;
