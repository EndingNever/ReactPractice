import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{ // Our saveExpenseDataHandler has a parameter
        const expenseData = { // With our parameter (enteredExpenseData) we assign it an id and keep its value
            ...enteredExpenseData, //We take our argument and with the spread operator we keep its previous value
            id: Math.random().toString() // Assign our expenseData an id
        };
        props.onAddExpense(expenseData); // Using our function from the parent,we send our new expenseData
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* We send our saveExpenseDataHandler as onSaveExpenseData to our child  */}
        </div>
    )
}

export default NewExpense;