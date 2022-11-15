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
    creatyeNewList = () => {
        const list = {
            id: Math.random(),
            title: "Novo Item da Lista",
            board: 2226,
            cards: [],
            createdAt: new Date()
        }
        this.setState({currentLists: [...this.state.currentLists, list]})
    }
    render(){
        return(
            <div className="lists-wrapper">
                <button onClick={this.creatyeNewList}>Nova Lista</button>
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
        )
    }
}
export default Board;