import React from 'react'
import List from './List'
import data from '../sampleData'

class Board extends React.Component{
    state = {
        currentLists: []
    }
    componentDidMount(){
        this.setState({currentLists: data.lists})
    }
    addBoardtitleinput = React.createRef()
    creatyeNewList = (e) => {
        e.preventDefault()
        const list = {
            id: Math.random(),
            title: this.addBoardtitleinput.current.value,
            board: 2226,
            cards: [],
            createdAt: new Date()
        }
        if (list.title) {
            this.setState({currentLists: [...this.state.currentLists, list]})
        }
        this.addBoardtitleinput.current.value = ''
    }
    render(){
        return(
        <div className="lists-wrapper">
            <div className="lists-wrapper">                
                <p>Board-js</p>
                {Object.keys(this.state.currentLists).map(
                    key => (
                        <List
                            key={this.state.currentLists[key].id}
                            list={this.state.currentLists[key]}
                        />
                    )
                )}
            </div>
            <form onSubmit={this.creatyeNewList} className="new-list-wrapper">
                <input
                name="boardNewListName"
                type="text"
                placeholder=" + Nova Lista"
                ref={this.addBoardtitleinput} />
            </form>
        </div>
        )
    }
}
export default Board;