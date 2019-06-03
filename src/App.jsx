import React, { Component } from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li> {this.props.name} </li>;
  }
}

function RandomComponent(props){
  return <p onClick={() => props.whateverYouWant('hello')}>I am a {props.adjective} component made by {props.name}</p>
}

function generateRandomNumber(){
  return Math.random
}

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
      name:"Francis"
    };
    this.addCharacterToTheList = this.addCharacterToTheList.bind(this)
  }

  handleAlertMessage(message){
    console.log(message)
  }

  addCharacterToTheList(){
    let joshsFavoriteCharacter = 'Voldemort'
    let newArray = this.state.characters
    newArray.push({ name: joshsFavoriteCharacter })
    let newNewArray = [...this.state.characters, {name:joshsFavoriteCharacter}]
    this.setState({characters: newArray, name:joshsFavoriteCharacter})
  }

  addCharacterToTheListArrow = (param) => {
    /**
     * Stuff here and no use of .bind(this) necessary
     */
  }

  render() {
    // Creating an array or React LI Elements
    const characterList = this.state.characters.map(characterObj => (
      <Character key={characterObj.name} name={characterObj.name} />
    ));

    return (
      <div>
        <h1 className="title" onClick={this.addCharacterToTheList}>{this.state.name}' Favorite Characters</h1>

        <ul>{characterList}</ul>
        <RandomComponent adjective="wonderful" name={this.state.name} whateverYouWant={this.handleAlertMessage}/>
      </div>
    );
  }
}
export default App;
