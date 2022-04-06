import React, { useState } from "react"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({ // Instead of updating each one individually, we update all at once
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({ // All at once update
        //     ...userInput, // Spread operator helps us to not lose our previous state
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState)=>{ //Better for updating multiple states, if you depend on previous states you should use this approach
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const submitHandler = (e) => { /* 3. Our submit handler is called here, which.... */
        e.preventDefault();

        const expenseData = {  /* 4. We declare our expenseData here and provide values we entered in our input*/
            title: enteredTitle, 
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData); /* 5. We call the function as a prop which we got from our parent component and send back our expenseData as an argument  */
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}> {/* 2. Clicking the button activates our submitHandler function called in this component */}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button> {/* 1. When we click the button, we submit the form */}
            </div>
        </form>
    );
};

export default ExpenseForm;