import React, { Component } from 'react';

import style from './App.module.css';
import Transaction from './components/Transaction/Transaction';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

class App extends Component {
  state = {
    balance: 0,
    showTransactions: false
  }
 
  buttonClickedHandler = type => {
    this.setState({ showTransactions: true });
    console.log(type)
  }

  hideFields = type => {
    if(type === 'ok')
      console.log('ok')
    
    this.setState({ showTransactions: false });
  }
  
  render() {    
    return (
      <main className={style.app}>
        <h1>Transaction<span style={{ color: "var(--highlight-color)" }}>Manager</span></h1>
        <Transaction visible={this.state.showTransactions} hideFields={this.hideFields} />
        <Input disabled={true} value={"R$ " + this.state.balance.toFixed(2)}>Saldo:</Input>
        <div className={style.buttons}>
        <div className={style.row}>
          <Button icon="plus" clicked={() => this.buttonClickedHandler('dep')}>Depositar</Button>
          <Button icon="minus" color="var(--neg-color)" clicked={() => this.buttonClickedHandler('ret')}>Retirar</Button>
        </div>
          <Button icon="list" color="var(--highlight-color)">Listar Transferências</Button>
        </div>
      </main>
    );
  }
}

export default App;
