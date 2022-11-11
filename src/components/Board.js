import React from 'react'

class Board extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.board.title}</p>
            </div>
        )
    }
}
export default Board;