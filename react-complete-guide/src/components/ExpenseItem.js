import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date();
    const itemDescription = 'Car Insurance';
    const itemPrice =8000;
    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{itemDescription}</h2>
                <div className='expense-item__price'>{itemPrice}</div>
            </div>

        </div>
    )
}

export default ExpenseItem;