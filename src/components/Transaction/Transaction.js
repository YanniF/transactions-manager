import React, { useState } from 'react';

import style from './Transaction.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const transaction = props => {
  const [valueInput, setValueInput] = useState('');
  const [description, setDescription] = useState('');
  
  let classes = [style.field];

  if (props.visible)
    classes.push(style.visible);
  else
    classes.push(style.hidden);

  const clickedButtonHandler = type => {
    props.confirmTransaction(type, valueInput, description)
    setValueInput('');
    setDescription('');
  }

  return (
    <div className={classes.join(' ')}>
      <Input type="number" changed={e => setValueInput(e.target.value)} value={valueInput}>Valor:</Input>
      <Input changed={e => setDescription(e.target.value)} value={description} maxLength={50}>Descrição:</Input>
      <Button icon="check" clicked={() => clickedButtonHandler('ok')}></Button>
      <Button icon="cancel" color="var(--neg-color)" clicked={() => clickedButtonHandler('cancel')}></Button>
    </div>
  )
}

export default transaction;