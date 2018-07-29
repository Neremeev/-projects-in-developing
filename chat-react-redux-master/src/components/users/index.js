import React, { Component } from 'react'
import {connect} from "react-redux";
import {addNewUser} from "../../actions/usersActions";
import faker from 'faker';


class Users extends Component {

    render() {
        let randomName = `@${faker.internet.userName()}`;
        return (
            <div className="users">
                <h3 className="users__title">Online users:</h3>

                <ul>
                    {this.props.users.map(u => {
                        return <li key={u}>{u}</li>
                    })}
                </ul>

                <button onClick={() => this.props.addNewUser(randomName)}>
                    add new user
                </button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps =  {
    addNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)