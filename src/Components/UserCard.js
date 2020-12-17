import React from 'react'
import {List} from 'semantic-ui-react'

class UserCard extends React.Component{

    render(){
        return <List.Item icon="user" content={this.props.user.username} />
    }
}

export default UserCard