import React, { Component } from 'react';

import style from './App.module.css';
import Transaction from './components/Transaction/Transaction';
import List from './components/List/List';
import Button from './components/UI/Button/Button';

class App extends Component {
  state = {
    transactions: [],
    balance: 0,
    type: '',
    showTransactions: false,
    showList: false
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('transactionState'));

    if(storage) {
      this.setState({ ...this.state, transactions: [...storage.transactions], balance: storage.balance });
    }
  }

  buttonClickedHandler = type => {
    this.setState({ showTransactions: true, type: type });
  }

  confirmTransactionHandler = (type, value, desc) => {
    let newTransaction = [...this.state.transactions];
    let newBalance = this.state.balance;

    if (type === 'ok') {

      if(value === '' || desc === '') {
        alert('Por favor, preencha todos os campos'); // TODO - customize this
        return;
      }

      value = parseInt(value);

      if (this.state.type === 'deposit') {
        newBalance += value;
        newTransaction.push({ value: value, description: desc, date: new Date(), type: this.state.type });
      }
      else if (this.state.type === 'withdraw') {
        newBalance -= value;
        newTransaction.push({ value: value, description: desc, date: new Date(), type: this.state.type });
      }
    }
    this.setState(
      { ...this.state, transactions: newTransaction, balance: newBalance, showTransactions: false },
      () => localStorage.setItem('transactionState', JSON.stringify(this.state))
    );   
  }

  btnListClickedHandler = () => {
    this.setState({ ...this.state, showList: !this.state.showList });
    setTimeout(() => {
      
      console.log(this.state.showList)
    }, 1000);
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
            <Button icon="plus" clicked={() => this.buttonClickedHandler('deposit')}>Depositar</Button>
            <Button icon="minus" color="var(--neg-color)" clicked={() => this.buttonClickedHandler('withdraw')}>Retirar</Button>
          </div>
          <Button icon="list" color="var(--highlight-color)" clicked={this.btnListClickedHandler}>Listar Transações</Button>
        </div>
        <List visible={this.state.showList} transactions={this.state.transactions} />
      </main>
    );
  }
}

export default App;
