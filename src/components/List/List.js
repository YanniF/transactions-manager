import React from 'react';

import style from './List.module.css';

const list = props => {

  let transactions = [];
  let date = null;
  let printDate;

  if (props.transactions) {
    transactions = [...props.transactions];
    transactions.reverse();
  }

  return (
    <div>
      <p>List</p>
      <dl>
        {
          transactions.map((t, index) => {
            // group by dates
            if (date !== new Date(t.date).toLocaleDateString()) {
              date = new Date(t.date).toLocaleDateString();
              printDate = <dt>{new Date(t.date).toLocaleDateString()}</dt>;
            }
            else
              printDate = null;

            return (
              <React.Fragment key={index}>
                {printDate}
                <dd style={{ color: t.type === 'deposit' ? 'var(--pos-color)' : 'var(--neg-color)' }}>
                  {t.description}: <strong>{t.type === 'deposit' ? '+' : '-'} R$ {t.value.toFixed(2).toLocaleString()}</strong>
                </dd>
              </React.Fragment>
            )
          })
        }
      </dl>
    </div>
  )
}

export default list;