import css from '../TransactionHistory/TransactionHistory.module.css';


export function TransactionHistory({ items }) {
    return (
      <table className={css.transaction__history}>
        <thead>
          <tr>
            <th className={css.table__header}>Type</th>
            <th className={css.table__header}>Amount</th>
            <th className={css.table__header}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({id, type, amount, currency }) => (
            <tr key={id} className={css.table__row}>
              <td className={css.table__cell}>{type}</td>
              <td className={css.table__cell}>{amount}</td>
              <td className={css.table__cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  