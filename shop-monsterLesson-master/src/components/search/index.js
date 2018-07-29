import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchPhone} from '../../actions'


class Search extends Component {

    state = {
        value: ''
    }
    // здесь он биндил методы и использовал конструктор всемто state = {...} (исправил)

    // косяки по поиску или как не надо делать поиск
    // во-первых, он каждый раз перезаписывает телефоны, то есть, если ты ввел эпл, а потом леново, он тебе ничего не
    // найдет, так как будет искать не в изначальном массиве, а в уже отфильтрованном
    // во-вторых, регистр он не учитывает при поиске - очень плохо
    // в-третьих, кнопка handleSubmit должна находиться внутри формы, сейчас она не работает
    // в четвертых, можно было бы сделать живой поиск
    // пример хорошего поиска можно посмотреть у меня в https://github.com/Neremeev/TodoList-with-auth-V4-React-Redux
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchPhone(this.state.value)
    }


    render () {
        return (
            <div className='well blosd'>
                <h3 className='lead'>Quick shop</h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type='text'
                            className='form-control'
                        />
                    </form>
                    <span className='input-group-btn'>
          <button className='btn btn-default'>
            <span className='glyphicon glyphicon-search'/>
          </button>
        </span>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    searchPhone
}

export default connect(null, mapDispatchToProps)(Search)

