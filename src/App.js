import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    persons : [
      {name:"Max", age:28},
      {name:"Manu", age:29},
      {name:"Stephanie", age:26}
    ],
  //  username: 'Anna'
  }

  // switchNameHandler = (newName) => {
  //   //console.log('was logged')
  //   //this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       {name: newName, age:28},
  //       {name:"Manu", age:29},
  //       {name:"Stephanie", age:27}
  //     ]//,
  //   //  username: "Anna"
  //   })
  // }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  // switchUsername = (event) => {
  //   this.setState({username: event.target.value});
  // }

  render() {
    const style = {
      width:'60%',
      margin: '16px auto',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0 2px 3px #f6f',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1 style={style}> HI, I am react </h1>
        <button 
        style={style}
         onClick={() => this.switchNameHandler('Maximilian!!')}
        >Switch name </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}> Children </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
         // click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        {/* <UserInput 
          currentName = {this.state.username}
          changed={this.switchUsername}/>
        <UserOutput username={this.state.username}/>
        <UserOutput/>
        <UserOutput/> */}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' HI, I am react'));
  }
}

export default App;
