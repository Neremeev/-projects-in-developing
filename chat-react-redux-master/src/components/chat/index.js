import React, { Component } from 'react'
import Messages from '../messages'
import Users from '../users'

export default class Chat extends Component {

    render() {
        return (
            <main className="main-wrapper">
                <Messages />
                <Users />
            </main>

        )
    }
}
