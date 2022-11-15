import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class List extends React.Component{
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
            </div>
        )
    }
}
List.propTypes = {
    list: PropTypes.object.isRequired
}
export default List;