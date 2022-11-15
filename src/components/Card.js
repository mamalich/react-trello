import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component{
    render(){
        return(
            <div className='card'>{this.props.data.text}</div>
        )
    }
}
Card.propTypes = {
    data: PropTypes.object.isRequired
}
export default Card;