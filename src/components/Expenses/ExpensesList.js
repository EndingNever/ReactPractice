import React from 'react'
import ExpenseItem from '../ExpenseItem'
import "./ExpensesList.css"

export default function ExpensesList(props) {
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}
