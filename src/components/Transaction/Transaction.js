import React, { useState } from 'react';

import style from './Transaction.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const transaction = props => {
  const [valueInput, setValueInput] = useState(0);
  const [description, setDescription] = useState('');

  let classes = [style.field];

  if (props.visible)
    classes.push(style.visible);
  else
    classes.push(style.hidden);

  return (
    <div className={classes.join(' ')}>
      <Input type="number" changed={e => setValueInput(e.target.value)} value={valueInput}>Valor:</Input>
      <Input changed={e => setDescription(e.target.value)} value={description}>Descrição:</Input>
      <Button icon="check" clicked={() => props.confirmTransaction('ok', valueInput, description)}></Button>
      <Button icon="cancel" color="var(--neg-color)" clicked={() => props.confirmTransaction('cancel')}></Button>
    </div>
  )
}

export default transaction;