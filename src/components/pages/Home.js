import React from "react"
import BoardPreview from "../BoardPreview"
import CreateBoardForm from "../CreateBoardForm"
import PropTypes from 'prop-types'

class Home extends React.Component {
    newBoard = () => {
        const board = {
            id: Math.random(),
            title: "Nova Viagem",
            background: "#34A770",
            createdAt: new Date()
        }
        this.props.createNewBoard(board)
    }
    render() {
        return (
            <div>
                <CreateBoardForm />
                <div className="board-preview-wrapper">
                    <p>Home-js</p>
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