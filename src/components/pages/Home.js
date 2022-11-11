import React from "react";
import BoardPreview from "../BoardPreview";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home-js</h1>
                {
                    Object.keys(this.props.boards).map(
                        key => (
                                <BoardPreview
                                    key={key}
                                    board={
                                        this.props.boards[key]
                                    }
                                />
                        )
                    )
                }
            </div>
        )
    }
}
export default Home;