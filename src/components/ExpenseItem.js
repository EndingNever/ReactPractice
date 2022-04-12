import React, { useState } from 'react'
import Card from './Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);
    // console.log("Expense Item Evaluated by React")
    // const clickHandler=()=>{
    //     setTitle("Updated!");
    //     console.log(title);
    // };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change title</button> */}
            </Card>
        </li>
    )
}
