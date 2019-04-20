import React, { Component } from 'react';

import style from './App.module.css';
import Transaction from './components/Transaction/Transaction';
import List from './components/List/List';
import Button from './components/UI/Button/Button';

class App extends Component {
  state = {
    deposits: [],
    withdraws: [],
    balance: 0,
    type: '',
    showTransactions: false,
    showList: false
  }

  buttonClickedHandler = type => {
    this.setState({ showTransactions: true, type: type });
  }

  confirmTransactionHandler = (type, value, desc) => {
    let newDeposits = [...this.state.deposits];
    let newWithdraws = [...this.state.withdraws];
    let newBalance = this.state.balance;

    if (type === 'ok') {
      value = parseInt(value);

      if (this.state.type === 'deposits') {
        newBalance += value;
        newDeposits.push({ value: value, description: desc, date: new Date() });
      }
      else if (this.state.type === 'withdraw') {
        newBalance -= value;
        newWithdraws.push({ value: value, description: desc, date: new Date() });
      }
    }
    this.setState({ ...this.state, deposits: newDeposits, withdraws: newWithdraws, balance: newBalance, showTransactions: false });
  }

  render() {
    return (
      <main className={style.app}>
        <h1>Transaction<span style={{ color: "var(--highlight-color)" }}>Manager</span></h1>
        <Transaction visible={this.state.showTransactions} confirmTransaction={this.confirmTransactionHandler} />
        <div style={{ marginTop: '1rem' }}>
          <span>Saldo:</span>
          <p className={style.balance}>{"R$ " + this.state.balance.toFixed(2)}</p>
        </div>
        <div className={style.buttons}>
          <div className={style.row}>
            <Button icon="plus" clicked={() => this.buttonClickedHandler('deposits')}>Depositar</Button>
            <Button icon="minus" color="var(--neg-color)" clicked={() => this.buttonClickedHandler('withdraw')}>Retirar</Button>
          </div>
          <Button icon="list" color="var(--highlight-color)">Listar Transferências</Button>
        </div>
        <List visible={this.state.showList} deposits={this.state.deposits} withdraws={this.state.withdraws} />
      </main>
    );
  }
}

export default App;
