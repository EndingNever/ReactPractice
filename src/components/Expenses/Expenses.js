import React from 'react'
import Card from '../Card'
import ExpenseItem from '../ExpenseItem'

export default function Expenses(props) {
    return (
        <div>
            <Card className="expenses">
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}