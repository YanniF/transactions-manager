import React from 'react';

import style from './Input.module.css';

const input = props => {

  return (
    <div className={style.field}>
      <label className={style.label}>{props.children}
        <input type={props.type ? props.type : "text"} 
          className={style.input} 
          value={props.value}
          onChange={props.changed}
          maxLength={props.maxLength} />
      </label>
    </div>
  )
}

export default input;