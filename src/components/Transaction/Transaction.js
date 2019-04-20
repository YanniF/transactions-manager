import React from 'react';

import style from './Transaction.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const transaction = props => {
  let classes = [style.field];

  if (props.visible)
    classes.push(style.visible);
  else
    classes.push(style.hidden);


  const inputChangedHandler = e => {
    console.log(e.target.value)
  }

  return (
    <div className={classes.join(' ')}>
      <Input type="number" changed={inputChangedHandler}>Valor:</Input>
      <Input changed={inputChangedHandler}>Descrição:</Input>
      <Button icon="check" clicked={() => props.hideFields('ok')}></Button>
      <Button icon="cancel" color="var(--neg-color)" clicked={() => props.hideFields('cancel')}></Button>
    </div>
  )
}

export default transaction;