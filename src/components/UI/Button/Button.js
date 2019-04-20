import React from 'react';

import style from './Button.module.css';
import Cancel from '../Icons/Cancel';
import Check from '../Icons/Check';
import List from '../Icons/List';
import Minus from '../Icons/Minus';
import Plus from '../Icons/Plus';

const button = props => {
  let icon = null;
  let config = {
    width: props.width ? props.width : "18px",
    height: props.height ? props.height :"18px",
    fill: props.fill ? props.fill : "#fff"
  }

  // get the right icon
  if(props.icon === "cancel")
    icon = <Cancel {...config} />
  else if(props.icon === "check")
    icon = <Check {...config} />
  else if(props.icon === "list")
    icon = <List {...config} />
  else if(props.icon === "minus")
    icon = <Minus {...config} />
  else if(props.icon === "plus")
    icon = <Plus {...config} />
    
  return (
    <button className={style.btn} style={{backgroundColor: props.color}} onClick={props.clicked}>{icon}{" "}{props.children}</button>
  )
}

export default button;