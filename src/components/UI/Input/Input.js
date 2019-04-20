import React from 'react';

import style from './Input.module.css';

const input = props => {

  return (
    <div className={style.field}>
      <label className={style.label}>{props.children}
        <input type={props.type ? props.type : "text"} 
          className={style.input} 
          disabled={props.disabled} 
          defaultValue={props.value}
          onChange={props.changed} />
      </label>
    </div>
  )
}

export default input;