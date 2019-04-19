import React, { Component } from 'react';

import Check from './components/UI/Icons/Check';
import Cancel from './components/UI/Icons/Cancel';
import List from './components/UI/Icons/List';
import Minus from './components/UI/Icons/Minus';
import Plus from './components/UI/Icons/Plus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color: '#0A85FF'}}>Transaction<span style={{color: '#404040'}}>Manager</span></h1>
        <h1 style={{color: '#064789'}}>teste</h1>
        <h1 style={{color: '#6BCC1D'}}>teste</h1>
        <h1 style={{color: '#FF3224'}}>teste</h1>
        <h1 style={{color: '#0A85FF'}}>teste</h1>
        <h1 style={{color: '#404040'}}>teste</h1>
        <Check fill="var(--pos-color)" width="100px" height="100px" />
        <Cancel fill="var(--neg-color)" width="100px" height="100px" />
        <List fill="var(--primary-color)" width="100px" height="100px" />
        <Minus fill="var(--text-color)" width="100px" height="100px" />
        <Plus fill="var(--highlight-color)" width="100px" height="100px" />
      </div>
    );
  }
}

export default App;
