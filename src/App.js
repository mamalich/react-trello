import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import data from './sampleData';

class App extends React.Component{
  state = {
    boards: []
  }
  componentDidMount () {
    this.setState({ boards: data.boards })
  }
  render(){
    return(
      <div>
        <p>App-js</p>
        <Home boards={this.state.boards}/>
      </div>
    );
  }
}

export default App;