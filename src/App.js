import React from 'react';
import CardList from './components/card-list/card-list.compoenet';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: '',
    };

    // this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((monsters) => {
        this.setState({ monsters: monsters });
      });
  }

  handleOnChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className='App'>
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='search monster'
          handleOnChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
