import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: "",
    url: "",
    owned: false,
    books: []
  }

  render() {
    return (
      <div className="App">
      app
        <input 
          type="text" 
          name="name" 
          onChange={this.handleChange} 
          value={this.state.name} 
        />
        <input 
          type="text" 
          name="url" 
          onChange={this.handleChange} 
          value={this.state.url} 
        />
        <input 
          type="text" 
          name="owned" 
          onChange={this.handleChange} 
          value={this.state.owned} 
        />
      </div>
    );
  }
}

export default App;
