import React from 'react';
import CardList from './components/card-list/card-list.compoenet';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((monsters) => {
        this.setState({ monsters: monsters });
      });
  }

  render() {
    return (
      <div className='app'>
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
