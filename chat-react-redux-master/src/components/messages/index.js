import React, { Component } from 'react'
import {connect} from "react-redux";
import {addNewMessage} from "../../actions/messagesActions";

class Messages extends Component {

    submitForm = (event) => {
        event.preventDefault()
        this.props.addNewMessage('@alex123', this.input.value, Date.now())
        this.input.value = ''
    }

    render() {

        return (
            <div className="chat">
                <form onSubmit={this.submitForm} action="#">
                    {this.props.messages.map(m => {
                        const d = new Date(m.date)
                        return (
                            <p key={m.date} className="message">
                                <span className="message__date">{`${d.getDate()}/${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`}</span>
                                <span className="message__author">{m.user}: </span>
                                <span>{m.message}</span>
                            </p>
                        )
                    })}
                    <input ref={(input) => this.input = input} type="text" className="chat__input" />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

const mapDispatchToProps = {
    addNewMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)