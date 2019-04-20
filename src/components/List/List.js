import React from 'react';

import style from './List.module.css';

const list = props => {

  return (
    <div>
      <p>List</p>
      {
        props.deposits.map((dep, index) => (
          <p key={index}>Data: {dep.date.toLocaleDateString()} Desc: {dep.description} Valor: {dep.value} </p> 
        ))
      }
    </div>
  )
}

export default list;