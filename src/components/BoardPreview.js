import React from 'react';

class BoardPreview extends React.Component {
    render () {
        return(
            <div>
                <p>BoardPreview-js</p>
                <p>{this.props.board.title}</p>
            </div>
        )
    }
}
export default BoardPreview;