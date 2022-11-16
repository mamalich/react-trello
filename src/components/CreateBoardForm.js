import React from 'react';
import PropTypes from 'prop-types';

class CreateBoardForm extends React.Component{
    state = {
        id: Math.random(),
        title: '',
        background: '#34A770'
    }
    addboardtitle = React.createRef()
    handleSubmit = (e) => {
        e.preventDefault()
        const board = {
            id: Math.random(),
            title: this.addboardtitle.current.value,
            background: this.state.background,
            createdAt: new Date(),
            createdUser: 'MAMALICH',

        }
        if (board.title && board.background){
            this.props.createNewBoard(board)
        }
        this.addboardtitle.current.value = ''
    }
    render() {
        return (
            <form 
                className='create-board-wrapper'
                onSubmit={this.handleSubmit}
            >
                <input
                    type='text'
                    name='board-name'
                    placeholder='Board Name'
                    onChange={(e) => this.setState({title: e.target.value})}
                    ref={this.addboardtitle} />
                <select
                    name='board-background'
                    onChange={(e) => this.setState({background: e.target.value})}
                >
                    <option value='#34A770'>Verde-MaMaLich</option>
                    <option value='#FFC600'>Dourado</option>
                    <option value='#80FF00'>Verde</option>
                    <option value='#00A0FF'>Azul-YH</option>
                    <option value='#F800FF'>Rosa</option>
                    <option value='#9E02FE'>Roxo</option>
                    <option value='#FF0000'>Vermelhor</option>
                </select>
                <button type='submit'>Criar novo Board</button>
            </form>
        )
    }

}
CreateBoardForm.propTypes ={
    createNewBoard: PropTypes.func.isRequired
}
export default CreateBoardForm