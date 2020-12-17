import React from 'react'
import {Header,
    Button,
    List,
    Image} from 'semantic-ui-react'
import UserCard from './UserCard'

class BookCard extends React.Component{

  renderUsers = () => {
    if (this.props.book.users){
      const users = this.props.book.users 
      return users.map(user => <UserCard key={user.id} user={user} />)
    }
  }

  handleClick = (e) => {
    this.props.updateLikes(this.props.book.id)
  }

    render(){
      // console.log(this.props.book.users)
        return (
            <>
            <Header>{this.props.book.title}</Header>
          <Image
            src={this.props.book.img_url}
            size="small"
          />
          <p>{this.props.book.description}</p>
          <Button onClick={this.handleClick}
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "2,048"
            }}
          />
          <Header>Liked by</Header>
          <List>
            {this.renderUsers()}
          </List>
          </>
            )
    }
}

export default BookCard