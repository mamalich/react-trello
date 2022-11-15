import React from "react"
import BoardPreview from "../BoardPreview"
import CreateBoardForm from "../CreateBoardForm"
import PropTypes from 'prop-types'

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home-js</p>
                <CreateBoardForm 
                    createNewBoard={this.props.createNewBoard}
                />
                <div className="board-preview-wrapper">
                    {
                        Object.keys(this.props.boards).map(
                            key => (
                                    <BoardPreview
                                        key={key}
                                        board={this.props.boards[key]}
                                    />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    boards: PropTypes.array.isRequired,
    createNewBoard: PropTypes.func.isRequired
}
export default Home;