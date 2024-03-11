import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionsHistory}>
            <thead>
                <tr>
                <th className={css.thTitle}>Type</th>
                <th className={css.thTitle}>Amount</th>
                <th className={css.thTitle}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.tdType}>{item.type}</td>
                        <td className={css.tdAmount}>{item.amount}</td>
                        <td className={css.tdCurrency}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;