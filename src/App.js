import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Board from './components/Board';
import PageNotFound from './components/pages/PageNotFound';
import data from './sampleData';

class App extends React.Component{
  state = {
    boards: []
  }
  componentDidMount () {
    this.setState({ boards: data.boards })
  }
  createNewBoard = board => {
    this.setState({boards: [...this.state.boards, board] })
  }
  render(){
    return(
      <div>
        <p>App-js</p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home boards={this.state.boards} createNewBoard={this.createNewBoard} />} />
            <Route path="components/*" element={<Board />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;