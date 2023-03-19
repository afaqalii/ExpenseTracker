import React, { useRef, useState, useEffect } from 'react'
import "./ExpenseTracker.scss"

const ExpenseTracker = () => {

    const [BudgetValues, setBudgetValues] = useState([])
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState("")
    const GetBudgetValues = () => {
        setBudgetValues((prevState => [...prevState, {ProductName, ProductPrice}]))
        setProductName("")
        setProductPrice("")
        console.log(BudgetValues)
    }
  return (
    <div className='Expense_Calculator_div'>
        <h1>Budget Calculator</h1>
        <div className="Expense_Calculator">
            <div className="input_div">
                <label htmlFor="">Product Name</label>
                <input type="text" value={ProductName} onChange={e => setProductName(e.target.value)}  placeholder='Enter name......' name="" />
            </div>    
            <div className="input_div">
                <label htmlFor="">Product Price</label>
                <input type="text" value={ProductPrice} onChange={e => setProductPrice(e.target.value)} placeholder='$$$' name="" id="" />
            </div>
            <button onClick={GetBudgetValues}>Submit</button>
            
        </div>
        {BudgetValues?.map((budgetValue => {
        
            return (
                  <div className="Expense_display">
                        <div className="display_div">
                                    <p className='display_name'>{budgetValue?.ProductName}</p>
                                    <p className='display_price'>{budgetValue?.ProductPrice}</p>
                                <div className="display_buttons">
                                    <button>Edit</button>
                                        <button>Delete</button>
                                </div>
                        </div>
                    </div>
             )}))   
            }
            {BudgetValues.length > 0 ? <><button>Clear Expenses</button></>:<></>}
        
        <h1>Total Spending : $0</h1>
    </div>
  )
}

export default ExpenseTracker