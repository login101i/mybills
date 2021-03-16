import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format'



export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);


  //Money formatter function
  function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (

      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1] + ' zł '
    );
  }
  return (
    <>
      <h4>Twoje saldo</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  )
}
