import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';
const queryAllUsers = gql`
    query AllUsers {
        users {
            _id
            firstName,
            lastName,
            username
        }
    }
`;
class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className="users-container">
            {  this.props.data.users && this.props.data.users.map(user=> {
                return <User user={user}/>
            })}
        </div>
    }
}
export default graphql(queryAllUsers, {
    options: {pollInterval: 1000},
})(UsersContainer);
const User = ({user})=> {
    return <div className="col s12 m7">
        <div className="card horizontal">
            <div className="card-image">
                <img src={`http://www.gravatar.com/avatar/${user.username}`}/>
            </div>
            <div className="card-stacked">
                <div className="card-content" style={{padding:15, textAlign:"left"}}>
                    <p style={{fontSize:12, fontWeight:"bold" }}>
                        {user.username}
                    </p>
                    <p style={{fontSize:12}}>{user.firstName} {user.lastName}</p>
                </div>
            </div>
        </div>
    </div>
}