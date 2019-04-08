import React, { Component } from 'react';
import Character from './Character.jsx';

class App extends Component {
  constructor(props) {
    // Initialize the component
    super(props);

    // Only time you can set the state directly
    this.state = {
      characters: [
        { name: 'Garfield' },
        { name: 'Snoopy' },
        { name: 'SpongeBob' },
      ],
    };
  }

  render() {
    // Creating an array or React LI Elements
    const characterList = this.state.characters.map(characterObj => (
      <Character key={characterObj.name} name={characterObj.name} />
    ));

    return (
      <div>
        <h1 className="title">My Favorite Characters</h1>

        <ul>{characterList}</ul>
      </div>
    );
  }
}
export default App;
