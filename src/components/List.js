import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class List extends React.Component{
    state = {
        currentCards: []
    }
    addCardtitleinput = React.createRef()
    
    creatyeNewCard = (e) => {
        e.preventDefault()
        const card = {
            listId: 2225,
            id: Math.random(),
            text: this.addCardtitleinput.current.value,
            labels: [],
            createdAt: new Date()
        }
        if (card.text) {
            this.setState({currentCards: [...this.state.currentCards, card]})
        }
        this.addCardtitleinput.current.value = ''
        console.log('new card add'+card.text);
    }
    render(){
        return(
            <div className='list'>
                <p>List-js</p>
                <div className='list-header'>
                    <p>{this.props.list.title}</p>
                </div>
                {
                    Object.keys(this.props.list.cards).map(key => (
                        <Card
                            key={key}
                            data={this.props.list.cards[key]}
                        />
                    ))
                }
                <form
                    onSubmit={this.creatyeNewCard}
                    className="new-card-wrapper"
                >
                    <input
                    name="listNewCardName"
                    type="text"
                    placeholder=" + Novo Card"
                    ref={this.addCardtitleinput} />
                </form>
            </div>
        )
    }
}
List.propTypes = {
    list: PropTypes.object.isRequired
}
export default List;